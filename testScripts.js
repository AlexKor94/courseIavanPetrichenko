"use strict";
// callBack
function withCallBack(src,callBack){
  console.log("src");
  src = " - link for second function";
  let someNewValue = ()=> callBack(src);
  someNewValue();
}

withCallBack("some link",(link)=>{
  console.log(`second value ${link}`);
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
      console.log('Test');
    }
  };
  console.log(options.name);
  delete options.name;
  
  for(let key in options){
    if(typeof(options[key]) === 'object') {
      for(let i in options[key]){
        console.log(`The Property ${i} has a value: ${options[key][i]}`);
      }
    }
    console.log(`The Property ${key} has a value: ${options[key]}`);
  }
  console.log(options['colors']['border']);
// recursion
// object keys (Property) in array; 
console.log(Object.keys(options));
let objInArr = Object.keys(options);
console.log(objInArr.length);
options.makeTest();
// Деруструктуризація обєкту (Destructurin of the object): 
const {border, bg} = options.colors;
console.log(border);
}
workWithOptionObj();

// Array
function testArr(){
  const arr =[1,2,3,6,8];
 arr.pop();
 arr.push(10);
  console.log(arr);

  for (let vel of arr){
    console.log(vel);
  }

  arr[99] = 0;
  console.log(arr.length);
  console.log(arr);

  arr.forEach((item, i, arrLink) => {
    console.log(`${i}: ${item} in array: ${arrLink}`);
  });

  const str = "computer, leptop, monitor";
  const products = str.split(", ");
  console.log(products);

  let newString = products.join(', ');

  console.log(newString);

  let numbersArr = [2,13,26,8,10];
  numbersArr.sort();
  console.log(numbersArr);
  numbersArr.sort(compareNum);
  console.log(numbersArr);
}

function compareNum(a, b) {
  return a - b;
}
testArr();

// Переда даних по посиланню і по значенню
// Data transfer by link and value

function transferData(){
  let a = 5,
  b = a;

  b = b + 5;
  console.log(b);
  console.log(a);

  const obj = {
    a: 5,
    b: 1
  }
  const copy = obj;
  copy["a"] = 10;
  console.log(copy);
  console.log(obj);

  let newObj = copyObj(obj);
  newObj["a"] = 11;
  console.log(newObj);
  console.log(obj);

  const addNewObj = {
    d: 17,
    e: 20
  }
  
  const clone = Object.assign({},addNewObj);
  clone["d"] = 1;
  console.log(clone);
  console.log(addNewObj);
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
  console.log(oldArray);
  console.log(newArray);
}

//оператор разворота
// deployment operator
function deploymentArray(){
  const video = ["youtube","udemy"],
        blogs = ['blogger', 'facebook', 'instagram'],
        internet = [...video, ...blogs, 'Gmail'];
  console.log(internet);
}
deploymentArray();