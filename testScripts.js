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

const alex = Object.create(soldier);
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

 function getTotalProgressByIteration(data){
  let total = 0;
  let students = 0;
  const arr = Object.values(data);

  for (let course of arr) {
    students += course.length;
    for(let i = 0; i < course.length; i++) {
      total += course[i].progress;
    } 
  }

  return total / students;
 }

 //console.log(getTotalProgressByIteration(students));

////////////
function getTotalProgressByRecursion(data){
  if (Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i < data.length; i++){
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];
    for (let subData of Object.values(data)){
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}

const results = getTotalProgressByRecursion(students);

console.log(results[0]/results[1]);