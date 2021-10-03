/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // Get the value of the "data-image" attribute from the element with id "source". check
    let imgSource = document.getElementById("source");
    console.log(imgSource);
    let trgtSource = document.getElementById("target");
    console.log(trgtSource);
    let image = imgSource.getAttribute("data-image");
    console.log(image);

    // Create a new image element inside the target element that displays the image referred to by the attribute value.
    let img = document.createElement('img');
    img.src = image;
    document.getElementById('target').appendChild(img);

    // Then remove the original element.
    document.getElementById("source").remove();
    console.log(document.getElementById("source"));
})();
