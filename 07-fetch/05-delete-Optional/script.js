/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(async() => {
    const response = await fetch('../../_shared/api.json');
    //fetch first
    const data = await response.json();
    //get the heroes from api through response.
    let heroesArr = await data.heroes;
    //define the array we'll need to use.


    document.getElementById("run").addEventListener("click", () => {
        let id = document.getElementById("hero-id").value;
        //get input we can use from the user after they click the button
        let iD= parseInt(id)
        //value of id in API is a number, so need to convert the value to a number. with parseInt
        let ide = iD - 1
        //because the id's are not the same as the array identifiers we need to select one earlier.
        for (let i = 0; i<5; i++)
        //let's loop through the array with a very limited boolean in an if function
        {
            if (iD === heroesArr[ide].id) {
                //we want the user input to be equal to the array id in value. structure array[x].id needed.
                heroesArr.splice(ide, 1);
                //remove the correct object.
            }
        }
        console.log(heroesArr);
        //check if the array is gone.
    })
})();
