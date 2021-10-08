/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//When you click on the button, retrieve the values of the form check, split up and create array;
// and create the new hero in the API. how?

   // Each field must be filled in (it is up to you to manage).

//Display the result of all your heroes in the console.

   // Caution: powers must be stored in the same format as the previous heroes!

   // You do not have to update the JSON file, it is oké that when you refresh the page you lose the newly added heroes.

(async() => {


document.querySelectorAll("input").required = true;
//make 3 id's queryselector

    const response = await fetch('../../_shared/api.json');
    const data = await response.json();
    let heroesArr = await data.heroes;


document.getElementById("run").addEventListener("click", () => {
    let length = heroesArr.length;
    console.log(heroesArr);
    let heroName = document.getElementById("hero-name").value;
    let heroEgo = document.getElementById("hero-alter-ego").value;
    let heroPower = document.getElementById("hero-powers").value.split(",");
    let i = length
    let newHero = {
        id: i,
        name: heroName,
        alterEgo: heroEgo,
        abilities: heroPower,
    }
    console.log(newHero);
    heroesArr.push(newHero);
    console.log(heroesArr);
})
})();






// added heroes