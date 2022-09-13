'use strict';

const box = document.querySelector('.box');

 const newHeight = 100;
 const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
}

// changeParams(box, undefined, newWidth);
 changeParams(box, newHeight, newWidth);


 let userName;
 let userKey;

 console.log(userName??userKey??'User');