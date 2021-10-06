/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function (){
        let one = document.getElementById("n-1").textContent = Math.floor(Math.random() * 100+1);
        let two =document.getElementById("n-2").textContent = Math.floor(Math.random() * 100+1);
        let three = document.getElementById("n-3").textContent = Math.floor(Math.random() * 100+1);
        let four = document.getElementById("n-4").textContent = Math.floor(Math.random() * 100+1);
        let five = document.getElementById("n-5").textContent = Math.floor(Math.random() * 100+1);
        let six = document.getElementById("n-6").textContent = Math.floor(Math.random() * 100+1);
        let seven = document.getElementById("n-7").textContent = Math.floor(Math.random() * 100+1);
        let eight = document.getElementById("n-8").textContent = Math.floor(Math.random() * 100+1);
        let nine = document.getElementById("n-9").textContent = Math.floor(Math.random() * 100+1);
        let ten = document.getElementById("n-10").textContent = Math.floor(Math.random() * 100+1);

        let ray = [one, two, three, four,  five, six, seven, eight, nine, ten]
        document.getElementById("min").textContent = Math.min(...ray);
        document.getElementById("max").textContent = Math.max(...ray);
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        document.getElementById("sum").textContent = ray.reduce(reducer);
        document.getElementById("average").textContent = ray.reduce(reducer)/10;
    })

})();
