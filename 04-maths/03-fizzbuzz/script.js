/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//"In the console, " + --> console log all responses
//"for each number between 1 and 100 : " +
//"show "fizz"  --> multiple of 3, " +case
//""buzz" --> multiple of 5, " +case
//""fizzbuzz" multiple 5 & 3, " +case
//"or simply the number if it's none of these. default
function fizzBuzz() {
    for (let a = 1; a <= 100; a++) {
        let b = a % 3;
        let c = a % 5;
        let d = b + c;
        if (d===0) {
             console.log("FizzBuzz");
        }
        else if (b===0){
             console.log("Fizz");
        }
        else if (c === 0) {
                    console.log("Buzz");
                }
        else{
                 console.log(a);}
        }
}
console.log(fizzBuzz())