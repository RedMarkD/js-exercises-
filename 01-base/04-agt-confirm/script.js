/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let age = prompt("How old are you?");
let gender = prompt("What is your gender?");
let homeTown = prompt("What is your hometown?");
let acceptance = confirm("Age: "+age+ "gender: " + gender+ "hometown: "+homeTown);

if ((age && gender && homeTown != null) && (acceptance === true)) {
    alert("Thank you")
};
else {
    location.reload();
}


    // your code here
;
