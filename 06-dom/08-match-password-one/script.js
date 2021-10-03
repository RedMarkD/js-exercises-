/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function () {
        console.log('0');
        let pwOne = document.getElementById("pass-one").value;
        let pwTwo = document.getElementById("pass-two").value;
        if (pwOne === pwTwo) {
            document.getElementById("run").innerHTML = "Good";
            }
        else {
            document.getElementById("pass-one").style.backgroundColor = "red";
            document.getElementById("pass-two").style.backgroundColor = "red";
        }
        }
    )
