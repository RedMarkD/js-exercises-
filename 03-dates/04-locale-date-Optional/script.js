/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let today = new Date()
console.log(today)
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
document.getElementById("target").addEventListener("mouseover", dateWrite)

function dateWrite() {
    //Sunday 28 October 2018, 23h32
    let numday = today.getDay();
    let day = days[numday];
    let date = today.getDate();
    let nummonth = today.getMonth();
    let month = months[nummonth];

    let year = today.getFullYear();
    let hour = today.getHours();
    let min = today.getMinutes();
    if (min < 10) {min = "0"+min;}

    document.getElementById("target").innerHTML = day+" " +date+" "+month+" "+year+", "+hour+"h"+min

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

}
