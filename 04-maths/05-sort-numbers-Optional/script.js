/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    document.getElementById("run").addEventListener("click", function() {
        let preOrder = document.getElementById("numbers").value;
        console.log(preOrder);
        let splitNumber = preOrder.split(',').map(Number);
        console.log(splitNumber);
        let postOrder = splitNumber.sort(function(a, b) {
            return a - b});
        console.log(postOrder);
        //document.getElementById("numbers").removeAttribute('readonly');
        document.getElementById("numbers").value = postOrder;
        //document.getElementById("numbers").setAttribute('readonly', );
        })