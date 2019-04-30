/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var target = document.getElementById("target");

(function() {
var day     = new Date();
var hour    = day.getHours();
var minutes = day.getMinutes();
var time = hour+":"+minutes
console.log(time);

//////////////////////////////////make some more changes!
if (time >17+30){
target.innerHTML = "goodmornign"
};

if (time <14+15){
target.innerHTML = "helooooo"
};
///////////////////////////////////make some more changes! in de + of , of : ///

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
