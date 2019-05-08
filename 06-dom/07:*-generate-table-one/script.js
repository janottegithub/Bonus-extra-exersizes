/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var target = document.getElementById("target");

target.addEventListener("load", myFunction);

/*
function myFunction() {
var table = document.createElement("table");
target.appendChild("table");

var row = table.insertRow();
var cell1 = row.insertCell();
var cell2 = row.insertCell();
var cell3 = row.insertCell();
var cell4 = row.insertCell();
cell1.innerHTML("TEST!");
cell2.innerHTML("TEST!");
cell3.innerHTML("TEST!");
cell4.innerHTML("TEST!");
};
console.log(myFunction);*/



function myFunction() {
    var table = document.createElement("table");
    target.appendChild("table");



    for(var i = 0; i<10; i++){

        var tr = document.createElement("tr");
        tablebody.appendChild("tr");

        for(var j=0; j<10; j++){
        var td = document.createElement("td");
        tr.appendChild("td");
        var test =document.createTextNode("Test!")
        }
    }
    console.log(myFunction);
    document.body.appendChild(table);
};

