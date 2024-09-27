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
<pre id="output"></pre>

<script>
function mergeICSFiles() {
    const file1 = document.getElementById('file1').files[0];
    const file2 = document.getElementById('file2').files[0];

    if (!file1 || !file2) {
        alert("Bitte beide ICS Dateien hochladen.");
        return;
    }

    const reader1 = new FileReader();
    const reader2 = new FileReader();

    reader1.onload = function(e) {
        const data1 = e.target.result;
        reader2.onload = function(e) {
            const data2 = e.target.result;

            const mergedData = mergeICS(data1, data2);
            document.getElementById('output').textContent = mergedData;
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

    for (let line of lines1) {
        if (line.trim() === "BEGIN:VEVENT") {
            veventEntries.push(line);
        } else {
            result += line + "\n";
        }
        if (line.trim() === "END:VEVENT") {
            veventEntries.push(line + "\n");
        }
    }

    for (let line of lines2) {
        if (line.trim() === "BEGIN:VEVENT" || veventEntries.includes(line)) {
            veventEntries.push(line);
        }
    }

    result += veventEntries.join("\n");
    result += "END:VCALENDAR\n";

    return result;
}
</script>
