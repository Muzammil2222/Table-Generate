function tableGenerate() {
    const number = parseInt(document.getElementById("number").value);
    const range = parseInt(document.getElementById("range").value);
    let tableContent = '<table style="width: 100%; text-align: left; color: white;">';

    tableContent += '<tr><th>Multiplication</th><th>Result</th></tr>'; // Table headers

    for (let i = 1; i <= range; i++) {
        const result = i * number;
        tableContent += `<tr><td>${number} x ${i}</td><td>${result}</td></tr>`;
    }

    tableContent += '</table>';

    document.getElementById("tableResult").innerHTML = tableContent;
}
