/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Change the content of the indicated tag by the date of today , in english (ex : sunday 28 october 2018, 23h32).


(function() {

var target = document.getElementById("target");

var d = new Date();
var year = d.getFullYear()
/*(d.getMonth()+1)*/
var date = d.getDate();
var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

var month = new Array(12);
month[0]= "January";
month[1]= "February";
month[2]= "March";
month[3]= "April";
month[4]= "May";
month[5]= "June";
month[6]= "July";
month[7]= "August";
month[8]= "September";
month[9]= "October";
month[10]= "November";
month[11]= "December";

var maand = month[d.getMonth()+1];


var weekday = new Array(7);
 weekday[0]= "Sunday";
 weekday[1]= "Monday";
 weekday[2]= "Tuesday";
 weekday[3]= "Wednesday";
 weekday[4]= "Thursday";
 weekday[5]= "Friday";
 weekday[6]= "Saturday";

var day = weekday[d.getDay()];


console.log(day+","+date+" "+maand+" "+year+","+time);

target.innerHTML = day+","+date+" "+maand+" "+year+","+time;
})();
