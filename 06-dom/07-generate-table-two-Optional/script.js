/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    let table = document.createElement("table");
    table.setAttribute("id", "table");
    let tbody = document.createElement("tbody");
    let target = document.getElementById("target").appendChild(table);
    console.log(target);
    for (let i=1; i<=10; i++){
        let row = document.createElement("tr");
        document.getElementsByTagName("table");
        for (let j=1; j<=10 ; j++) {
            let cell = document.createElement("td");
            let text = i+"*"+j+" ="+i*j;
            let cellText = document.createTextNode(text);
            cell.appendChild(cellText);
            row.appendChild(cell);
            target.appendChild(row);
        }
        console.log(i);
    }
