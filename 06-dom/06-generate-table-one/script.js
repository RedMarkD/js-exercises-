/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//let table = document.createElement("table");

(function() {

    //let target = document.getElementById("target");
    let table = document.createElement("table");
    //let table = document.getElementsByTagName("table")
    let target = document.getElementById("target").appendChild(table);
    console.log(target);


    for (let i=0; i<10; i++){
        let target = document.getElementById("target").appendChild(table);
        //let table = document.getElementsByTagName("table");
        target.insertRow(i);
        target.insertRow(i).innerHTML = "."
        console.log(i)
    }
    console.log(i)

    // your code here

})();
