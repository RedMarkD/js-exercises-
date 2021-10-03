/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//trying to select multiple elements with getElementsByClassName does not work.
// trying to cycle through all elements with a for loop. check


(function() {
let replace = document.getElementsByClassName("target");
console.log(replace);
for (let i = 0; i < replace.length; i++){
    replace[i].innerHTML = "owned";
    }
    // your code here

})();
