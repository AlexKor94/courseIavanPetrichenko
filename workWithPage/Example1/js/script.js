'use strict';
const box = document.querySelector('#box'),
      btns = document.querySelectorAll('button'),
      circles = document.querySelectorAll('.circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: green; width: 500px';

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode(' Hi, there!');

div.classList.add('black');

document.body.append(div);
//document.body.appendChild(div);
//wrapper.prepend(div);
//hearts[0].after(div);
//wrapper.insertBefore(div, hearts[1]);
//circles[0].remove();
//wrapper.removeChild(hearts[1]);
//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

//div.innerHTML = "<h1>Hello world</h1>";
//div.textContent = 'Hello';

div.insertAdjacentHTML('afterbegin','<h2>Hello</h2>');