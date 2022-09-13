'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block?.textContent);

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 100}px`;
    elem.style.width = `${w ?? 400}px`;
}

changeParams(box, newHeight, newWidth);

console.log(1+2);