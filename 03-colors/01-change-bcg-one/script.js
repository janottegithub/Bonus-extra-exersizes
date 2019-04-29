/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var red    = document.getElementById("red").addEventListener("click",   changered);
var green  = document.getElementById("green").addEventListener("click", changegreen);
var yellow = document.getElementById("yellow").addEventListener("click",changeyellow);
var blue   = document.getElementById("blue").addEventListener("click",  changeblue);

function changered(){
document.body.style.backgroundColor = "red";
};
function changegreen(){
document.body.style.backgroundColor = "green";
};
function changeyellow(){
document.body.style.backgroundColor = "yellow";
};
function changeblue(){
document.body.style.backgroundColor = "blue";
};


    // your code here

})();


