/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let today = new Date()
console.log(today)

document.getElementById("run").addEventListener("click", ageCalc)

function ageCalc() {
    let y = document.getElementById("dob-year").value;
    let m= document.getElementById("dob-month").value;
    let d = document.getElementById("dob-day").value;
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    console.log(d  +"/"+ m +"/"+ y +"/"+ day +"/"+ month +"/"+ year);
    let dify= year - y;
    let difm = month - m;
    let difd=  day - d;
    // reason I got stuck: switch requires an expression, in this case a boolean, for more expressions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions
    switch(true){
        case (difm >=-1):{
            switch (true){
                case (difd>=0):{
                    document.getElementById("target").innerHTML = dify;
                    break;
                }
                default: {
                    document.getElementById("target").innerHTML = dify-1;
                }
            }
            break;
            }
        case (difm < -1):{
            document.getElementById("target").innerHTML = dify - 1;
            break;
        }
        default: {
            document.getElementById("target").innerHTML = dify;
        }

    }
}

