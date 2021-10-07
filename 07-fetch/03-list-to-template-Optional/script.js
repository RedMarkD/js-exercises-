/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
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
