const train = document.querySelector('img');
const block2 = document.querySelector('.block2');    
let counter = 0;  
let id;

document.addEventListener('DOMContentLoaded',() => {
    
  train.addEventListener('click', () => {
    id = setInterval(logger,10);
  });
});

function logger(){
 if (counter == 100) {
  clearInterval(id);
 }else{
 // console.log(train);
  counter++;
  block2.style.left = counter + "px";
  train.style.left = counter + "px";
 }
}

