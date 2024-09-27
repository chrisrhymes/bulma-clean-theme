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
        const mergedData = results.reduce((acc, curr) => mergeICS(acc, curr), results[0]);
        document.getElementById('output').value = mergedData;
    });
}

function mergeICS(data1, data2) {
    const lines1 = data1.split('\n');
    const lines2 = data2.split('\n');

    let result = "";
    let veventEntries = [];

    // Beginne mit dem ersten Kalenderkopf (alle Zeilen bis BEGIN:VEVENT)
    for (let line of lines1) {
        result += line + "\n";
        if (line.trim() === "BEGIN:VEVENT") {
            break;
        }
    }

    // Füge VEVENT-Einträge aus der ersten Datei hinzu
    let insideEvent = false;
    for (let line of lines1) {
        if (line.trim() === "BEGIN:VEVENT") {
            insideEvent = true;
        }
        if (insideEvent) {
            veventEntries.push(line);
        }
        if (line.trim() === "END:VEVENT") {
            insideEvent = false;
        }
    }

    // Füge VEVENT-Einträge aus der zweiten Datei hinzu
    insideEvent = false;
    for (let line of lines2) {
        if (line.trim() === "BEGIN:VEVENT") {
            insideEvent = true;
        }
        if (insideEvent) {
            veventEntries.push(line);
        }
        if (line.trim() === "END:VEVENT") {
            insideEvent = false;
        }
    }

    // Füge VEVENT-Einträge zur Kalenderdatei hinzu
    result += veventEntries.join("\n");

    // Füge das Kalenderende hinzu
    result += "END:VCALENDAR\n";

    return result;
}

function copyToClipboard() {
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    alert("ICS-Datei in die Zwischenablage kopiert!");
}
</script>
