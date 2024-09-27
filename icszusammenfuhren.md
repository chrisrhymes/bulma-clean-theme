---
title: ICS Code Generator
subtitle: Kombiniere ICS-Dateien für Home Assistant
description: Ein einfacher Codegenerator, um ICS-Dateien zusammenzuführen.
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
    let summaries = [];

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

                // Finde den SUMMARY-Eintrag und speichere ihn
                if (line.startsWith("SUMMARY:")) {
                    summaries.push(line.replace("SUMMARY:", "").trim());
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

    return { mergedData: result, summaries };
}

function displaySummaries(summaries) {
    const summaryContainer = document.getElementById('summaryList');
    summaryContainer.innerHTML = ""; // Vorherige Inhalte löschen

    // Zeige die Liste der SUMMARY-Einträge an
    if (summaries.length > 0) {
        const summaryTitle = document.createElement("h2");
        summaryTitle.textContent = "Deine ICS enthält folgende Einträge:";
        summaryContainer.appendChild(summaryTitle);

        const summaryList = document.createElement("ol"); // Geordnete Liste
        summaries.forEach((summary, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = summary;
            summaryList.appendChild(listItem);
        });
        summaryContainer.appendChild(summaryList);
    } else {
        summaryContainer.textContent = "Keine Einträge in den ICS-Dateien gefunden.";
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

