let counter = 0;  
let id;
document.addEventListener('DOMContentLoaded',() => {
  const train = document.querySelector('img');      
  train.addEventListener('click', () => {
    id = setInterval(logger,100);
  });
});

function logger(){
 if (counter == 100) {
  clearInterval(id);
 }else{
  counter++;
  train.style.left = counter + "px";
  console.log(counter);
 }
}