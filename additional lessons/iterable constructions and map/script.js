"use strict";

const user = {
  name: 'Alex',
  surname: 'Smithe',
  birthday: '20/04/1993',
  shiwMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
};


// for (const key in user) {
//   console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function() {};
// console.dir(arr);

// for (const key in arr) {
//   console.log(key);
// }

// const str = "string";
// for (const key in str) {
//   console.log(str[key]);
// }

const salaries = {
  john: 500,
  ivan: 1000,
  ann: 5000,
  sayHello: function() {
    console.log("hello");
  }
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.john,
    last: this.ann,

    next(){
      if(this.current < this.last) {
        this.current = this.current + 500;
        return {done: false, value: this.current};
      } else {
        return {done: true};
      }

      // {done: true, value: 123}
    }
  }
}

const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

// for (let res of salaries) {
//   console.log(res);
// }

// ===================== map =====================

const shops = [
  {rice: 500},
  {oil: 200},
  {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
  [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});
// map.set(shops[0],5000)
//    .set(shops[1],7000)
//    .set(shops[2],3000);
console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys();


// const goods = [];
// for (let shop of map.keys()){
//   goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);


// for (let price of map.values()){
//   console.log(price);
// }

// for (let [shop, price] of map.entries()){
//   console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//   console.log(key, value);
// });


const uesrMap = new Map(Object.entries(user));
console.log(uesrMap);

const newUserObj = Object.fromEntries(uesrMap);
console.log(newUserObj);