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