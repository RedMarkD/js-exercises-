/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("pass-one").addEventListener("input", function (){
    let value = document.getElementById("pass-one").value;
    let length = value.length
    console.log(length);
    if (value.length>=8) {
        const pass = RegExp("[a-zA-Z][0-9]{2,}");
        console.log("YES1")
        if (value.match(pass)){
            console.log("YES2")
        document.getElementsByTagName("span")[0].innerHTML = "Ok";}
    }})
