/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    age    = window.prompt("whats your age","any");
    gender = window.prompt("whats your gender","male or female");
    house  = window.prompt("where do you live?","somewhere");
    alert("Youre age is:"+age+"<br>"+"Your gender is"+gender+"<br>"+"You live in"+house);
})();
