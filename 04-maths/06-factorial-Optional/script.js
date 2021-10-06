/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
document.getElementById("run").addEventListener("click", function() {
    let input = document.getElementById("number").value;
    console.log(input);
    let nrInput = parseInt(input)
    let output = 1
    for (let i = 1; i < nrInput; i++) {
        output *= i;
        //console.log(output);
    }
    console.log(output);
    document.getElementById("number").value = output;

        });