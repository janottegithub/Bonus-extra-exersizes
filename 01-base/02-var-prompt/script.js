/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later

(function () {
input = document.createElement("input");
//document.window.appendChild(input);
person = window.prompt("what is your name?","Is it mr incredible?!");
window.prompt("my name is "+ person +" and i love Surfing!");
})();
