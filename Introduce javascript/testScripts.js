"use strict";
// callBack
function withCallBack(src,callBack){
  //console.log("src");
  src = " - link for second function";
  let someNewValue = ()=> callBack(src);
  someNewValue();
}

withCallBack("some link",(link)=>{
  //console.log(`second value ${link}`);
});

// object loop
function workWithOptionObj(){
  const options = {
    name: "area",
    width: 100,
    height: 30,
    colors: {
      border: "black",
      background: "red"
    },
    makeTest: () => {
      //console.log('Test');
    }
  };
  //console.log(options.name);
  delete options.name;
  
  for(let key in options){
    if(typeof(options[key]) === 'object') {
      for(let i in options[key]){
        //console.log(`The Property ${i} has a value: ${options[key][i]}`);
      }
    }
    //console.log(`The Property ${key} has a value: ${options[key]}`);
  }
  //console.log(options['colors']['border']);
// recursion
// object keys (Property) in array; 
//console.log(Object.keys(options));
let objInArr = Object.keys(options);
//console.log(objInArr.length);
options.makeTest();
// Деруструктуризація обєкту (Destructurin of the object): 
const {border, bg} = options.colors;
//console.log(border);
}
workWithOptionObj();

// Array
function testArr(){
  const arr =[1,2,3,6,8];
 arr.pop();
 arr.push(10);
  //console.log(arr);

  for (let vel of arr){
    //console.log(vel);
  }

  arr[99] = 0;
  //console.log(arr.length);
  //console.log(arr);

  arr.forEach((item, i, arrLink) => {
    //console.log(`${i}: ${item} in array: ${arrLink}`);
  });

  const str = "computer, leptop, monitor";
  const products = str.split(", ");
  //console.log(products);

  let newString = products.join(', ');

  //console.log(newString);

  let numbersArr = [2,13,26,8,10];
  numbersArr.sort();
  //console.log(numbersArr);
  numbersArr.sort(compareNum);
  //console.log(numbersArr);
}

function compareNum(a, b) {
  return a - b;
}
//testArr();

// Переда даних по посиланню і по значенню
// Data transfer by link and value

function transferData(){
  let a = 5,
  b = a;

  b = b + 5;
  //console.log(b);
  //console.log(a);

  const obj = {
    a: 5,
    b: 1
  }
  const copy = obj;
  copy["a"] = 10;
  //console.log(copy);
  //console.log(obj);

  let newObj = copyObj(obj);
  newObj["a"] = 11;
  //console.log(newObj);
  //console.log(obj);

  const addNewObj = {
    d: 17,
    e: 20
  }
  
  const clone = Object.assign({},addNewObj);
  clone["d"] = 1;
  //console.log(clone);
  //console.log(addNewObj);
}

function copyObj(obj){
  let objCopy = {};

  let key;
  for(key in obj){
    objCopy[key] = obj[key];
  }

  return objCopy;
}

// cpy arr

function copyArr(){
  const oldArray = ['a','b','c'];
  const newArray = oldArray.slice();
  newArray[2] = "d";
  //console.log(oldArray);
  //console.log(newArray);
}

//оператор разворота
// deployment operator
function deploymentArray(){
  const video = ["youtube","udemy"],
        blogs = ['blogger', 'facebook', 'instagram'],
        internet = [...video, ...blogs, 'Gmail'];
  //console.log(internet);
}
//deploymentArray();

function log(a, b , c){
  //console.log(a);
  //console.log(b);
  //console.log(c);
}

let numbers = [2,5,7];
log(...numbers);

function transformArray(){
  const array = ["a","b"];
  const newArray = [...array];
  //console.log(newArray);
}
transformArray();

function transformObj(){
  const q = {
    one: 1,
    two: 2
  };
  const newObj = {...q};
  //console.log(newObj);
}
transformObj();

// Method forEach

function testForEach(){
  const arr = [1,2,3];
  let str = '';
  arr.forEach((num)=>{
    str += "1";
  });
  return str;
}

////console.log(testForEach());

function reverseString(){
  const str = 'hello';
  let splitStr = str.split('');
  //console.log(splitStr);
}
reverseString();

// spread array
function spreadArray(){
 const arr1 = [1,2,3];
 const arr2 = [4,5,6,7];
 const arr3 = [...arr1, ...arr2];
 //console.log(arr3);
}

//spreadArray();

const soldier = {
  health: 400,
  armer: 100,
  sayHello: function() {
    //console.log("Hello");
  }
};

const jonh = {
  health: 100
};

//const alex = Object.create(soldier);
// jonh.__proto__ = soldier; Deprecated
Object.setPrototypeOf(jonh, soldier);

//jonh.sayHello();
//alex.sayHello();

// 1) To String
//console.log(typeof(String(null)));

// 2) To Number
//console.log(typeof(Number('4')));
//console.log(typeof(+'5'));
//console.log(typeof(parseInt('15px',10)));

// 3) To boolean
// false: 0, "", null, undefined, NaN;

let switcher = null;

if(switcher){
  //console.log('working....');
}

switcher = 1;

if(switcher){
  //console.log('working....');
}

//console.log(typeof(Boolean('4')));
//console.log(typeof(!!"44"));

let tstNum = 5;
function logNumber(){
  let tstNum = 4;
  //console.log(tstNum);
}
logNumber();
tstNum = 6;

const user = {
  name: 'Alex',
  age: 25,
  test: function(){
    for (let i = 1; i < 5; i++) {
      //console.log(i + 1)
  }
  }
}
// const {name, age} = user;
// //console.log(name);
// //console.log(age);
// user.test();


function foo(a,b) {
  let word = a[1];
  const [first, second] = a;
  const {eng, ru} = b;

  return `${second} ${ru}`;
}
 //console.log(foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'}));

 function pow (x, n) {
  if (n === 1){
    return x;
  }else{
   // //console.log(x * pow(x, n - 1));
    return x * pow(x, n - 1);
  }
 }

 //console.log(pow(2, 3));

 let firstVal = 0;
 function testRecursion(n){

if(firstVal < n){
  firstVal = n;
}

if (n === 1) {
  return "start with: " + firstVal;
}else{
  return testRecursion(n-1);
}
 }

 //console.log(testRecursion(5));

 let students = {
  js: [{
      name: 'Sasha',
      progress: 100
  },{
      name: "Ivan",
      progress: 60
  }],
  php: [{
      name: "Petro",
      progress: 50
  },{
      name: "Vika",
      progress: 70
  },{
    name: "Alex",
    progress: 95
}]
 };

//  function getTotalProgressByIteration(data){
//   let total = 0;
//   let students = 0;
//   const arr = Object.values(data);

//   for (let course of arr) {
//     students += course.length;
//     for(let i = 0; i < course.length; i++) {
//       total += course[i].progress;
//     } 
//   }

//   return total / students;
//  }

 //console.log(getTotalProgressByIteration(students));

// //////
// function getTotalProgressByRecursion(data){
//   if (Array.isArray(data)) {
//     let total = 0;
//     for (let i = 0; i < data.length; i++){
//       total += data[i].progress;
//     }
//     return [total, data.length];
//   } else {
//     let total = [0, 0];
//     for (let subData of Object.values(data)){
//       const subDataArr = getTotalProgressByRecursion(subData);
//       total[0] += subDataArr[0];
//       total[1] += subDataArr[1];
//     }
//     return total;
//   }
// }

// const results = getTotalProgressByRecursion(students);

//console.log(results[0]/results[1]);


// descriptors object

// writable
// enumerable
// configurable

// const objUser = {
//   name: 'Alex',
//   surname: 'Smithe',
//   birthday: '20/04/1993',
//   shiwMyPublicData: function() {
//     //console.log(`${this.name} ${this.surname}`);
//   }
// };

// Object.defineProperty(objUser, 'birthday', {writable: false});

//console.log(Object.getOwnPropertyDescriptor(objUser, 'name'));

// Object.defineProperty(objUser, 'name', {writable: false});
// // objUser.name = "dsfsdf"; -- only read
// Object.defineProperty(objUser, 'gender', {value: 'male'});
// //console.log(Object.getOwnPropertyDescriptor(objUser, 'gender'));

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

//console.log(disemvowel());


// Задание:
// В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.
// Пример:
// Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
// from teacher:
// function amountOfPages(summary){
//   let result = '';
//   let n = 0;

//   for (let i = 1; i <= summary; i++) {
//     result += i;
//     if (result.length === summary) {
//       n = i;
//       break;
//     }
//   }

//   return n;
// }

// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.
// Пример:
// isPangram(«The quick brown fox jumps over the lazy dog») => true
// isPangram(«Hello world») => false

// function isPangram(str = ""){
//   const string = str.toUpperCase();
//   const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
//   'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
//   'Y', 'Z' ];
//   let i = string.length;

//   while(i--){
//     let index = alphabet.indexOf(string.charAt(i));
//     if (index > -1){
//       alphabet.splice(index, 1);
//     }
//   }
//   if( alphabet.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// expected output: true

// function someFunc (str = "dog") {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const arr = alphabet.split('');
//   return arr.every(x => str.toLowerCase().includes(x));
// }

// console.log("abc".includes("A"));


// function isPangram(str = ""){
//     const string = str.toUpperCase();
//     const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
//     'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
//     'Y', 'Z' ];
//     console.log(string.includes('A'));
//     let result =  alphabet.every((letter) => {
//       return string.includes(letter)
//     });
//     return result;
// }
//   console.log(isPangram("The quick brown fox jumps over the lazy dog"));

  // ================ WeakMap =================

  // let cache = new WeakMap();

  // function cacheUser(user){
  //   if(!cache.has(user)){
  //     cache.set(user, Date.now());
  //   }
  //   return cache.get(user);
  // }

  // let lena = {name: 'Elenf'};
  // let alex = {name: 'Alex'};

  // cacheUser(lena);
  // cacheUser(alex);

  // cache.delete(lena);

  // console.log(cache.has(lena));
  // console.log(cache.has(alex));

// WeakSet
// add, has, delete

// let massages = [
//   {text: 'hello', from: 'John'},
//   {text: 'World', from: 'Lena'},
//   {text: 'Uhh', from: 'Jeka'}
// ];

// let readMessages = new WeakSet();

// readMessages.add(massages[0]);
//readMessages.add(massages[1]);

// massages.shift();

// console.log(readMessages.has(massages[0]));

// const now = new Date();

// console.log(now.setHours(18));
// console.log(now);

// let start = new Date();
// for (let i =0; i < 100000; i++){
//   let some = i ** 3;
// }
// let end = new Date();

// console.log(`Loop work for ${end - start} milisecond || minute ${(end - start) / 60}`);


// Contructor function
function User (name, id){
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`)
  };
}

User.prototype.exit = function () {
  console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 1);
const alex = new User('Alex', 2);

//ivan.exit();

//console.log(ivan);

// Call Context
function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
//showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() { 
//     console.log(this);
//   }
// };

// obj.sum();

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + " " + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count (num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => {
//       console.log(this.num);
//     };

//     say();
//   }
// };

// obj.sayNumber();

// =============== Create classes ===============================

// class Rectangle {
//    constructor(height, width) {
//       this.height = height;
//       this.width = width;
//    }

//    calcArea() {
//     return this.height * this.width;
//    }
// }

// class ColoredRectanglWithText extends Rectangle {
//   constructor (height, width, text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps() {
//     console.log(`Text: ${this.text}, color: ${this.bgColor}`);
//   }
// }

// const div = new ColoredRectanglWithText(25, 10, 'Hello World', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// =============== Create classes ===============================

// =============== Start Rest Operator ===============================

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', ['top']);

// =============== End Rest Operator ===============================

// const urlObj = {
//   protocol: 'https',
//   domain: 'mysite.com'
// }

// function showCurrentURL() {
//   const extractCurrDomain = () => {
//       return this.domain;
//   }
//   const extractCurrProtocol = () => {
//       return this.protocol;
//   }

//   console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
// }

// const url = showCurrentURL.bind(urlObj);

// console.log(url);

// =============== Start JSON ===============================
// =============== End JSON ===============================

// const persone = {
//   name: 'Alex',
//   tel: '+380931111'
// };

// const jsonFile = JSON.stringify(persone);

// const fullCopyObj = JSON.parse(jsonFile);

// fullCopyObj.name = 'Ivan';

// console.log(persone, fullCopyObj);

// =============== Promise start JSON ===============================
// console.log('Start query data');

// const promiseObj = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     console.log('Prepering data');
  
//     const product = {
//       name: 'TV',
//       price: 2000
//     };
    
//     resolve(product);
//   },2000);

// }).then((product) => {
//   setTimeout(() => {
//     product.status = 'order';
//     console.log('recived in stock');

//   setTimeout(() => {
//     product.price = 2500;
//     console.log('update data');
//     console.log(product);
//   }, 1000);

//   }, 1000);
// }).catch(() => {
//   console.error('Some problem...');
// });

// //--------

// var isMomHappy = true;

// var showOff = function (phone) {
//   return new Promise(
//       function (resolve, reject) {
//           var message = 'Hey friend, I have a new ' +
//               phone.color + ' ' + phone.brand + ' phone';
//           resolve(message);
//       }
//   );
// };

// // Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // Всё выполнено
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );
// console.log('before asking Mom'); 
// willIGetNewPhone.then((phone) => {
//   console.log('Yepiii, I have the new phone!');
//   showOff(phone).then((message) => {
//     console.log(message);
//     console.log('All steps successfully done!');
//   });
// }).catch((err) => {
//   console.log(err.message);
// });
// console.log('after asking mom');
// =============== Promise end JSON ===============================

// =============== Api start JSON ===============================
//
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  body: JSON.stringify({name:'Alex'}),
  headers: {
    'Content-type': 'application/json'
  }
})
  .then(response => response.json())
  .then(json => console.log(json));

// =============== Api end JSON ===============================