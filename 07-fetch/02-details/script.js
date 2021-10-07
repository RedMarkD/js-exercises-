/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//When you click on the button, get the id from the form, getelementbyID,  lukt 1/3
// then get the corresponding X-Men from the API and display it in the tag whose id is "target". display in console, works, not in template  ol
// Use the tag template to reproduce a suitable html structure.

async function fetchHeroesJSON() {
    const response = await fetch('../../_shared/api.json');
    // fetch the data
    const data = await response.json();
    let heroesArr = data.heroes;
    console.log(heroesArr)
    // make it legible
    const input = document.getElementById("hero-id");
    //get input
    for (i = 0; i < heroesArr.length; i++) {
        if (input.value == heroesArr[i].id) {
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
document.getElementById("run").addEventListener("click", fetchHeroesJSON)
// fetched heroes
