/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let day = new Date();
    let hour = day.getHours();
    let min = day.getMinutes();
    if (hour === 17){
        if (min>=30){
            document.getElementById("target").innerHTML = "Good evening";
        }
        else {
            document.getElementById("target").innerHTML = "hello";
        }
    }
    else if (hour>17){
        document.getElementById("target").innerHTML = "good evening";
    }
    else {
        document.getElementById("target").innerHTML = "Hello"
    }
}());


