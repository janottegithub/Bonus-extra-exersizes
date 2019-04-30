/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//hange the content of the tag by Hello (if it's less than 18h), or by Goog evening.

(function () {
    var d    = new Date();
    var hour = d.getHours();
    console.log(hour);
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var target = document.getElementById("target");
    if (hour<18){target.innerText = "keep on coding!"};
    if (hour>18){target.innerHTML = "good evening!"};
})();
