"use strict";

const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src){
  const script = document.createElement('script');
  script.src = src;
  document.body.append(script);
}

loadScript('test.js');