---
title: ICS Code Generator
subtitle: Kombiniere ICS-Dateien für Home Assistant
description: Ein einfacher Codegenerator, um ICS-Dateien zusammenzuführen.
show_sidebar: false
layout: page
---

<p>Lade bis zu sechs ICS-Dateien hoch, die zusammengeführt werden sollen (du kannst auch nur zwei hochladen):</p>

<form>
    <label for="file1">ICS Datei 1:</label>
    <input type="file" id="file1" accept=".ics"><br><br>

    <label for="file2">ICS Datei 2:</label>
    <input type="file" id="file2" accept=".ics"><br><br>

    <label for="file3">ICS Datei 3 (optional):</label>
    <input type="file" id="file3" accept=".ics"><br><br>

    <label for="file4">ICS Datei 4 (optional):</label>
    <input type="file" id="file4" accept=".ics"><br><br>

    <label for="file5">ICS Datei 5 (optional):</label>
    <input type="file" id="file5" accept=".ics"><br><br>

    <label for="file6">ICS Datei 6 (optional):</label>
    <input type="file" id="file6" accept=".ics"><br><br>

    <button type="button" class="button is-primary" onclick="mergeICSFiles()">ICS Dateien zusammenführen</button>
</form>

<h2>Zusammengeführte ICS-Datei:</h2>
<textarea id="output" rows="20" cols="80" readonly></textarea>
<br>
<button class="button is-info" onclick="copyToClipboard()">In Zwischenablage kopieren</button>

<script>
function mergeICSFiles() {
    const files = [
        document.getElementById('file1').files[0],
        document.getElementById('file2').files[0],
        document.getElementById('file3').files[0],
        document.getElementById('file4').files[0],
        document.getElementById('file5').files[0],
        document.getElementById('file6').files[0]
    ];

    const validFiles = files.filter(file => file !== undefined); // Nur die hochgeladenen Dateien auswählen

    if (validFiles.length < 2) {
        alert("Bitte mindestens zwei ICS-Dateien hochladen.");
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
        const { mergedData, summaries } = mergeMultipleICS(results);
        document.getElementById('output').value = mergedData;
        displaySummaries(summaries);
    });
}

function mergeMultipleICS(filesData) {
    let result = "";
    let veventEntries = [];
    let summaries = new Set(); // Verwende ein Set für eindeutige SUMMARY-Einträge

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

    return { mergedData: result, summaries: Array.from(summaries) }; // Konvertiere Set zurück in Array
}

function cleanSummary(summary) {
    // Regulärer Ausdruck, um Ziffern, Daten oder Sonderzeichen am Ende des Summary zu entfernen
    return summary.replace(/\s[\d\.\-\/]+$/, ''); // Entfernt Ziffern und Sonderzeichen am Ende
}

function displaySummaries(summaries) {
    const summaryContainer = document.getElementById('summaryList');
    summaryContainer.innerHTML = ""; // Vorherige Inhalte löschen

    let umlautWarning = false; // Flag, um festzustellen, ob Umlaute vorhanden sind

    // Zeige die Liste der bereinigten SUMMARY-Einträge an
    if (summaries.length > 0) {
        const summaryTitle = document.createElement("h2");
        summaryTitle.textContent = "Deine ICS enthält folgende Einträge (bearbeitbar):";
        summaryContainer.appendChild(summaryTitle);

        const summaryList = document.createElement("ol"); // Geordnete Liste
        summaries.forEach((summary, index) => {
            const listItem = document.createElement("li");
            
            // Eingabefeld für den Bearbeitung der SUMMARY-Einträge
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = summary;
            inputField.id = `summary-input-${index}`;
            listItem.appendChild(inputField);
            summaryList.appendChild(listItem);

            // Prüfe, ob der Eintrag Umlaute enthält
            if (/[äöüß]/i.test(summary)) {
                umlautWarning = true; // Umlaute gefunden
            }
        });
        summaryContainer.appendChild(summaryList);

        // Füge einen Button hinzu, um die Änderungen auf die zusammengeführte Datei anzuwenden
        const updateButton = document.createElement("button");
        updateButton.textContent = "Änderungen übernehmen";
        updateButton.className = "button is-primary";
        updateButton.onclick = updateSummaries;
        summaryContainer.appendChild(updateButton);

        // Zeige Warnung, falls Umlaute gefunden wurden
        updateUmlautWarning(umlautWarning);
    } else {
        summaryContainer.textContent = "Keine Einträge in den ICS-Dateien gefunden.";
    }
}

function updateSummaries() {
    const updatedSummaries = [];

    // Sammle die aktualisierten Einträge aus den Eingabefeldern
    document.querySelectorAll("[id^=summary-input-]").forEach(input => {
        updatedSummaries.push(input.value.trim());
    });

    // Ersetze die zusammengeführte ICS-Datei mit den aktualisierten `SUMMARY`-Einträgen
    let updatedICS = document.getElementById('output').value;

    // Nur der jeweilige Eintrag wird geändert, basierend auf der Position
    updatedSummaries.forEach((newSummary, index) => {
        const regex = new RegExp(`SUMMARY:.*?(?=\\n)`, 'g'); // Findet den nächsten `SUMMARY`-Eintrag
        updatedICS = updatedICS.replace(regex, (match, position) => {
            return `SUMMARY:${newSummary}`;
        });
    });

    // Aktualisiere das Textfeld mit der neuen ICS-Datei
    document.getElementById('output').value = updatedICS;

    // Prüfe nach der Änderung erneut auf Umlaute
    let umlautWarning = updatedSummaries.some(summary => /[äöüß]/i.test(summary));

    // Aktualisiere die Warnung
    updateUmlautWarning(umlautWarning);
}

function updateUmlautWarning(umlautWarning) {
    const warningElement = document.getElementById("umlautWarning");

    if (umlautWarning) {
        // Wenn die Warnung nicht bereits existiert, füge sie hinzu
        if (!warningElement) {
            const warningMessage = document.createElement("p");
            warningMessage.style.color = "red";
            warningMessage.id = "umlautWarning";
            warningMessage.textContent = "Warnung: Einige Einträge enthalten Umlaute (ä, ö, ü, ß). Diese können bei der Weiterverarbeitung zu Problemen führen.";
            document.getElementById("summaryList").appendChild(warningMessage);
        }
    } else {
        // Entferne die Warnung, wenn keine Umlaute mehr vorhanden sind
        if (warningElement) {
            warningElement.remove();
        }
    }
}

function copyToClipboard() {
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    alert("ICS-Datei in die Zwischenablage kopiert!");
}
</script>

<div id="summaryList"></div> <!-- Container für die Summary-Einträge -->
