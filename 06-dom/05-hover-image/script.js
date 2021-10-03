/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
const img = document.getElementsByTagName("img")[0];
const dataInitial = img.src;

document.getElementsByTagName("img")[0].addEventListener("mouseover", function (){
    //let imgSrc = document.getElementsByTagName("img")[0].getAttribute("src");
    console.log(dataInitial)
    let dataHover = img.getAttribute("data-hover");
    console.log(dataHover)
    img.src = dataHover;
    console.log(img.src);})
document.getElementsByTagName("img")[0].addEventListener("mouseleave", function (){
    //let imgSrc = document.getElementsByTagName("img")[0].getAttribute("src");
    console.log(dataInitial)
    img.src = dataInitial;
    console.log(dataInitial)
    console.log(img.src);

    })