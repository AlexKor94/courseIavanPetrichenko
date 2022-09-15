"use strict";

const obj = {
  name: 'Test',
  [Symbol('id')]: 1
};

console.log(obj);

let obj2 = {
  name: 'Pasha'
}

let newId = Symbol("id");
obj2[newId] = 2;

console.log(obj2);

for (let val in obj) console.log(val);

console.log(obj [Object.getOwnPropertySymbols(obj)[0]]);
