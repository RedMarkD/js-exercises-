/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//
// to get the value of an input: document.getElementById("element-id").value
Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
    $btn.addEventListener("click", function () {
        performOperation($btn.id);
        console.log($btn.id);
    })});

    //document.getElementById("target").innerHTML = x + y;
    // perform an addition
function performOperation(lol) {
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
    //console.log($btn)

        switch (lol) {
            case "addition":
                document.getElementById("target").innerHTML = x + y;
                break;
            case "subtraction":
                document.getElementById("target").innerHTML = x - y;
                break;
            case "multiplication":
                document.getElementById("target").innerHTML = x * y;
                break;
            case "division":
                document.getElementById("target").innerHTML = x / y;
                break;
        }
}

