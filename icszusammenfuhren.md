---
title: ICS Code Generator
subtitle: ICS-Dateien hochladen oder von URL abrufen
description: Lade ICS-Dateien hoch oder rufe sie von einer URL ab, um sie zu bearbeiten oder zusammenzuführen.
show_sidebar: false
layout: page
---

<p>Lade eine oder mehrere ICS-Dateien hoch oder gib die URL einer ICS-Datei an, um sie zu verarbeiten:</p>

<!-- URL-Eingabe -->
<div class="ics-input-container">
    <label for="ics-url">ICS URL (optional):</label>
    <input type="text" id="ics-url" placeholder="Gib die URL einer ICS-Datei ein">
    <button class="button is-primary" onclick="fetchICSFromURL()">Kalender von URL laden</button>
</div>

<!-- Datei-Upload -->
<form class="ics-input-container">
    <div class="file-input-group">
        <label for="file1">ICS Datei 1 (erforderlich, wenn keine URL):</label>
        <input type="file" id="file1" accept=".ics">
    </div>
    <div class="file-input-group">
        <label for="file2">ICS Datei 2 (optional):</label>
        <input type="file" id="file2" accept=".ics">
    </div>
    <div class="file-input-group">
        <label for="file3">ICS Datei 3 (optional):</label>
        <input type="file" id="file3" accept=".ics">
    </div>
    <div class="file-input-group">
        <label for="file4">ICS Datei 4 (optional):</label>
        <input type="file" id="file4" accept=".ics">
    </div>
    <div class="file-input-group">
        <label for="file5">ICS Datei 5 (optional):</label>
        <input type="file" id="file5" accept=".ics">
    </div>
    <div class="file-input-group">
        <label for="file6">ICS Datei 6 (optional):</label>
        <input type="file" id="file6" accept=".ics">
    </div>

    <button type="button" class="button is-primary" onclick="mergeICSFiles()">ICS Datei(en) verarbeiten</button>
</form>

<h2>Verarbeitete ICS-Datei:</h2>
<textarea id="output" rows="20" cols="80" readonly></textarea>
<br>
<button class="button is-info" onclick="copyToClipboard()">In Zwischenablage kopieren</button>

<div id="summaryList"></div> <!-- Container für die Summary-Einträge -->

<style>
    .ics-input-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
    }

    .file-input-group {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .file-input-group label {
        min-width: 250px;
    }

    .file-input-group input[type="file"] {
        flex-grow: 1;
    }

    .ics-input-container button {
        align-self: flex-start;
    }

    textarea {
        width: 100%;
        max-width: 600px;
    }
</style>

<script>
let isFromURL = false; // Variable zum Überprüfen, ob die Datei von einer URL stammt

function fetchICSFromURL() {
    const url = document.getElementById('ics-url').value;

    if (!url) {
        alert("Bitte eine gültige URL eingeben.");
        return;
    }

    isFromURL = true; // Markiere, dass die Datei von einer URL kommt

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Netzwerkfehler oder ungültige URL.");
            }
            return response.text();
        })
        .then(data => {
            processSingleICSFile(data); // Die heruntergeladene Datei verarbeiten
        })
        .catch(error => {
            console.error("Fehler beim Abrufen der ICS-Datei:", error);
            alert("Fehler beim Abrufen der ICS-Datei. Überprüfen Sie die URL.");
        });
}

function mergeICSFiles() {
    isFromURL = false; // Setze auf false, wenn Dateien hochgeladen werden
    const files = [
        document.getElementById('file1').files[0],
        document.getElementById('file2').files[0],
        document.getElementById('file3').files[0],
        document.getElementById('file4').files[0],
        document.getElementById('file5').files[0],
        document.getElementById('file6').files[0]
    ];

    // Nur die Dateien verarbeiten, die tatsächlich hochgeladen wurden
    const validFiles = files.filter(file => file !== undefined);

    if (validFiles.length === 0) {
        alert("Bitte mindestens eine ICS-Datei hochladen oder eine gültige URL eingeben.");
        return;
    }

    const readers = validFiles.map(file => {
        const reader = new FileReader();
        reader.readAsText(file);
        return reader;
    });

    Promise.all(readers.map(reader => new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
    })))
    .then(results => {
        if (validFiles.length === 1) {
            // Wenn nur eine Datei hochgeladen wurde, verarbeite nur diese
            const data = results[0];
            processSingleICSFile(data);
        } else {
            // Wenn mehrere Dateien hochgeladen wurden, führe sie zusammen
            const { mergedData, summaries } = mergeMultipleICS(results);
            document.getElementById('output').value = mergedData;
            displaySummaries(summaries);
        }
    });
}

function processSingleICSFile(data) {
    const lines = data.split('\n');
    let veventEntries = [];
    let summaries = new Set();

    lines.forEach(line => {
        veventEntries.push(line);

        // Finde den SUMMARY-Eintrag, bereinige ihn und speichere ihn im Set
        if (line.startsWith("SUMMARY:")) {
            const cleanedSummary = cleanSummary(line.replace("SUMMARY:", "").trim());
            summaries.add(cleanedSummary);
        }
    });

    // Kalenderdaten im Ausgabe-Textfeld anzeigen
    document.getElementById('output').value = lines.join("\n");

    // Zeige die zusammengefassten Einträge an
    displaySummaries(Array.from(summaries));
}

function mergeMultipleICS(filesData) {
    let result = "";
    let veventEntries = [];
    let summaries = new Set();

    // Verarbeite jede Datei, um die VEVENT-Einträge und die SUMMARYs zu extrahieren
    filesData.forEach(data => {
        const lines = data.split('\n');
        let insideEvent = false;

        lines.forEach(line => {
            if (line.trim() === "BEGIN:VEVENT") {
                insideEvent = true;
            }

            if (insideEvent) {
                veventEntries.push(line);

                // Finde den SUMMARY-Eintrag, bereinige ihn und speichere ihn im Set
                if (line.startsWith("SUMMARY:")) {
                    const cleanedSummary = cleanSummary(line.replace("SUMMARY:", "").trim());
                    summaries.add(cleanedSummary);
                }
            }

            if (line.trim() === "END:VEVENT") {
                insideEvent = false;
            }
        });
    });

    // Kalenderkopf hinzufügen (BEGIN:VCALENDAR)
    result += "BEGIN:VCALENDAR\n";
    
    // Alle VEVENT-Einträge hinzufügen
    result += veventEntries.join("\n") + "\n";

    // Kalenderende hinzufügen (END:VCALENDAR)
    result += "END:VCALENDAR\n";

    return { mergedData: result, summaries: Array.from(summaries) };
}

function cleanSummary(summary) {
    // Regulärer Ausdruck, um Ziffern, Daten oder Sonderzeichen am Ende des Summary zu entfernen
    return summary.replace(/\s[\d\.\-\/]+$/, ''); // Entfernt Ziffern und Sonderzeichen am Ende
}

function displaySummaries(summaries) {
    const summaryContainer = document.getElementById('summaryList');
    summaryContainer.innerHTML = ""; // Vorherige Inhalte löschen

    let umlautWarning = false;

    if (summaries.length > 0) {
        const summaryTitle = document.createElement("h2");
        summaryTitle.textContent = "Deine ICS enthält folgende Einträge:";
        summaryContainer.appendChild(summaryTitle);

        // Beschreibung je nach Quelle (URL oder Datei)
        const description = document.createElement("p");
        if (isFromURL) {
            description.textContent = "Das Bearbeiten der Einträge ist bei einer ICS von einer URL leider nicht möglich.";
        } else {
            description.textContent = "Du kannst die Bezeichnungen individuell ändern, indem du diese in die jeweiligen Textfelder einträgst und auf 'Änderungen übernehmen' klickst.";
        }
        summaryContainer.appendChild(description);

        const summaryList = document.createElement("ol");
        summaries.forEach((summary, index) => {
            const listItem = document.createElement("li");

            // Eingabefeld für die Bearbeitung der SUMMARY-Einträge
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = summary;
            inputField.id = `summary-input-${index}`;
            inputField.dataset.originalSummary = summary;
            listItem.appendChild(inputField);
            summaryList.appendChild(listItem);

            // Prüfe, ob der Eintrag Umlaute enthält
            if (/[äöüß]/i.test(summary)) {
                umlautWarning = true;
            }

            // Eingabefelder deaktivieren, wenn die Datei von einer URL stammt
            if (isFromURL) {
                inputField.disabled = true;
            }
        });
        summaryContainer.appendChild(summaryList);

        // Füge einen Button hinzu, um die Änderungen auf die zusammengeführte Datei anzuwenden (nur bei lokalen Dateien)
        if (!isFromURL) {
            const updateButton = document.createElement("button");
            updateButton.textContent = "Änderungen übernehmen";
            updateButton.className = "button is-primary";
            updateButton.onclick = updateSummaries;
            summaryContainer.appendChild(updateButton);
        }

        // Zeige Warnung, falls Umlaute gefunden wurden
        updateUmlautWarning(umlautWarning);
    } else {
        summaryContainer.textContent = "Keine Einträge in der ICS-Datei gefunden.";
    }
}

function updateSummaries() {
    const updatedSummaries = [];

    // Sammle die aktualisierten Einträge aus den Eingabefeldern
    document.querySelectorAll("[id^=summary-input-]").forEach(input => {
        const originalSummary = input.dataset.originalSummary;
        const newSummary = input.value.trim();
        updatedSummaries.push({ original: originalSummary, updated: newSummary });
    });

    // Ersetze die zusammengeführte ICS-Datei mit den aktualisierten `SUMMARY`-Einträgen
    let updatedICS = document.getElementById('output').value;

    // Suche und ersetze die Einträge
    updatedSummaries.forEach(({ original, updated }) => {
        const regex = new RegExp(`SUMMARY:${original}`, 'g');
        updatedICS = updatedICS.replace(regex, `SUMMARY:${updated}`);
    });

    // Aktualisiere das Textfeld mit der neuen ICS-Datei
    document.getElementById('output').value = updatedICS;

    // Prüfe nach der Änderung erneut auf Umlaute
    let umlautWarning = updatedSummaries.some(summary => /[äöüß]/i.test(summary.updated));

    // Aktualisiere die Warnung
    updateUmlautWarning(umlautWarning);
}

function updateUmlautWarning(umlautWarning) {
    const warningElement = document.getElementById("umlautWarning");

    if (umlautWarning) {
        if (!warningElement) {
            const warningMessage = document.createElement("p");
            warningMessage.style.color = "red";
            warningMessage.id = "umlautWarning";
            warningMessage.textContent = "Warnung: Einige Einträge enthalten Umlaute (ä, ö, ü, ß). Diese können bei der Weiterverarbeitung zu Problemen führen.";
            document.getElementById("summaryList").appendChild(warningMessage);
        }
    } else {
        if (warningElement) {
            warningElement.remove();
        }
    }
}

function copyToClipboard() {
    var copyText = document.getElementById('output');
    copyText.select();
    document.execCommand('copy');
    alert('ICS-Datei in die Zwischenablage kopiert!');
}
</script>
