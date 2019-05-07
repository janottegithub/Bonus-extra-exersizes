/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var immage = document.querySelector("img");
immage.addEventListener("hover", myFunction());

function myFunction() {
//immage.atrr(src).replace("")
//this.src.value.replace

immage.attr(src) = immage.attr(data-hover);

//immage.src = immage.attr(data-hover).value;

};
console.log(myFunction());
