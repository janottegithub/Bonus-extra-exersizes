/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var klick = document.getElementById("run").addEventListener("click", run);
function run() {
var day = document.body.querySelector( "#dob-day option").value;
console.log(day);

};
