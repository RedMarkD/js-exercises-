/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//When you click on the button, retrieve the values of the form and create the new hero in the API.
   // Each field must be filled in (it is up to you to manage).

//Display the result of all your heroes in the console.

   // Caution: powers must be stored in the same format as the previous heroes!

   // You do not have to update the JSON file, it is oké that when you refresh the page you lose the newly added heroes.

async function fetchHeroesJSON() {
    const response = await fetch('../../_shared/api.json');
    // fetch the data
    const data = await response.json();
    let heroesArr = data.heroes;
    console.log(heroesArr);
    for (let i = 0; i < heroesArr.length; i++) {
        {
            // compare input with array filter object data from array
            let hero = document.getElementById("tpl-hero").content.cloneNode(true);
            let target = document.getElementById("target");
            //clone the template node, append to ol
            hero.querySelector(".name").innerText = heroesArr[i].name;
            //add data from array to nametags
            hero.querySelector(".alter-ego").innerText = heroesArr[i].alterEgo;
            hero.querySelector(".powers").innerText = heroesArr[i].abilities;
            target.appendChild(hero);
        }

    }

}
//const heroID =  await heroes.id[heroNr];
//console.log(heroID);
document.getElementById("run").addEventListener("click", fetchHeroesJSON);
// fetched heroes