/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click",theFunction());

function theFunction() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    fruits.forEach(function(item,index,Array){
       //alert('i have bought a '+item+' jahoeeee');
        console.log(item);
    })
    console.log(fruits);
    //fruits.forEach(fruits=>console.log(fruits));

    //var arrayLength = fruits.length;

    //fruits.forEach(function(item,index,Array){
    //fruits.forEach(function(item,index,Array){

    //console.log(i = 0, i < fruits.length, i++);
    //alert('i have bought a '+item+' jahoeeee');

    //of

    //for(var i=0; i<arrayLength; i++){
    //console.log(fruits.values);
    //}

    // your code here

};
