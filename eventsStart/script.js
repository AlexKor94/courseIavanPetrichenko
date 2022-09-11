const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

btn.addEventListener('click',() => {
  alert('Click');
});

btn.addEventListener('click', (e) => {
  e.target.remove();
});

const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});

btns.forEach( button => {
  button.addEventListener('click',() => {
    console.log('start');
  }, {once: true});
});
