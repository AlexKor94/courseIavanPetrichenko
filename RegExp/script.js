'use strict';
// const ans = prompt('Write your name');
// const regExp = /n/ig;
// i - шукає незалежно від регістру
// g -  шукає декілька входжень
// m - мультистроковий режим
// console.log(ans.search(regExp));
// console.log(ans.match(regExp));

// const pass = prompt('Password');
// console.log(pass.replace(/\./, "*"));

// console.log('12-34-56'.replace(/-/g,':'));

// console.log(regExp.test(ans));

// Classes RegExp
// \d - всі числа
// \w - всі слова (букви)
// \s - всі пробіли

// const ans = prompt('Введіть число');
// const regExp = /\d/g;
// console.log(ans.match(regExp));

const str = 'My name is R2D2';
console.log(str.match(/\D/ig));
 
// \D - не число 
// \W - не буква, не число
