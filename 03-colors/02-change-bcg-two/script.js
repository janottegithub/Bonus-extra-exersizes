/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var run = document.getElementById("run").addEventListener('click',btn)

function btn () {

var input = document.getElementById("color");
var copy = input.value
localStorage.setItem("colors", copy)
document.body.style.backgroundColor = copy;
console.log(copy)
};
