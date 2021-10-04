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
// then get the corresponding X-Men from the API and display it in the tag whose id is "target".
// Use the tag template to reproduce a suitable html structure.

async function fetchHeroesJSON() {
    const response = await fetch('../../_shared/api.json');
    const heroes = await response.json();
    // waits until the request completes...
    const heroNr = await document.getElementById("hero-id").value;
    const result = heroes.heroes.filter(obj => {
        return obj.id === parseInt(heroNr);

    })
    console.log(result);
}
    //const heroID =  await heroes.id[heroNr];
    //console.log(heroID);

document.getElementById("run").addEventListener("click", fetchHeroesJSON)
// fetched heroes




/*async function getXmenData() {



    let theHero = document.getElementById("target").innerHTML = hero;


    }
document.getElementById("run").addEventListener("click", getXmenData);*/