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
        const mergedData = mergeMultipleICS(results);
        document.getElementById('output').value = mergedData;
    });
}

function mergeMultipleICS(filesData) {
    let result = "";
    let veventEntries = [];

    // Verarbeite jede Datei, um nur die VEVENT-Einträge zu extrahieren
    filesData.forEach(data => {
        const lines = data.split('\n');
        let insideEvent = false;

        lines.forEach(line => {
            if (line.trim() === "BEGIN:VEVENT") {
                insideEvent = true;
            }

            if (insideEvent) {
                veventEntries.push(line);
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

    return result;
}

function copyToClipboard() {
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    alert("ICS-Datei in die Zwischenablage kopiert!");
}
</script>
