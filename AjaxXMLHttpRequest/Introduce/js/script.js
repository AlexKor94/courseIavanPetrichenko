'use strict';

const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd'),
      reuqest = new XMLHttpRequest();

inputUah.addEventListener('input', () => {
    reuqest.open('GET', '/js/current.json');
    reuqest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    reuqest.send();

    reuqest.addEventListener('load', () => {
      if (reuqest.status === 200) {
        let data = JSON.parse(reuqest.response);
        inputUsd.value  = (+inputUah.value / data.current.usd).toFixed(2);
      } else {
        inputUsd.value = 'Server not response! Try again';
      }
    });
});