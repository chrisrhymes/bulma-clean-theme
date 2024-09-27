---
title: ICS Code Generator
subtitle: Kombiniere ICS-Dateien für Home Assistant
description: Ein einfacher Codegenerator, um ICS-Dateien zusammenzuführen.
layout: page
show_sidebar: false
---

<h1>ICS Code Generator</h1>

<p>Lade zwei ICS-Dateien hoch, die zusammengeführt werden sollen:</p>

<form>
    <label for="file1">ICS Datei 1:</label>
    <input type="file" id="file1" accept=".ics"><br><br>

    <label for="file2">ICS Datei 2:</label>
    <input type="file" id="file2" accept=".ics"><br><br>

    <button type="button" onclick="mergeICSFiles()">ICS Dateien zusammenführen</button>
</form>

<h2>Zusammengeführte ICS-Datei:</h2>
<textarea id="output" rows="20" cols="80" readonly></textarea>
<br>
<button onclick="copyToClipboard()">In Zwischenablage kopieren</button>

<script>
function mergeICSFiles() {
    const file1 = document.getElementById('file1').files[0];
    const file2 = document.getElementById('file2').files[0];

    if (!file1 || !file2) {
        alert("Bitte beide ICS-Dateien hochladen.");
        return;
    }

    const reader1 = new FileReader();
    const reader2 = new FileReader();

    reader1.onload = function(e) {
        const data1 = e.target.result;
        reader2.onload = function(e) {
            const data2 = e.target.result;

            const mergedData = mergeICS(data1, data2);
            document.getElementById('output').value = mergedData;
        };
        reader2.readAsText(file2);
    };
    reader1.readAsText(file1);
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
