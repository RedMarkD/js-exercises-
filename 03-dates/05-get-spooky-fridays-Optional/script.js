/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* Goal is to let the page display every month with a friday the 13th of a given year.
* input: given year
* output, month or months -> loop necessary?
* how selection is done. day = 5 date = 13
* loop 12 times?
* forEach?
* first of all make an array for every month.
* then let a loop check if there is a friday the 13th in that month, if yes -> display that month.
*
* */
// array.forEach(function(currentValue, index, arr), thisValue),
const nummonths = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(nummonths)


function thiCheck(){
    months.forEach()
    {
    let year = document.getElementById("year");
    let d = new Date(year, nummonths, 13);
    let day = d.getDay();
    if (day === 5) {
            document.getElementById("target").innerHTML = months[nummonths]
        }
}

}


document.getElementById("run").addEventListener("click", thiCheck)

//document.getElementById("target").innerHTML = dify

