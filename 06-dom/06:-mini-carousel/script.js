/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var button = document.getElementById('next');
button.addEventListener('click',handleButtonClick)
var count = 0;
var image = document.querySelector('img');
var gallery= [
"../../_shared/img/bell.svg",
"../../_shared/img/clock.svg",
"../../_shared/img/compass.svg",
"../../_shared/img/lemon.svg",
"../../_shared/img/map.svg",
];

function handleButtonClick(){
count++; //increases count number ex. count = 1
if (count == gallery.length){ //resets count when it reaches 5, so it is never higher then 5
count = 0;
}
miniCaroussel(count); //executes function for count = 1
}

function miniCaroussel(count) {
image.src = gallery[count]; // image source can be found in 'array item 1 = clock.svg'
};

