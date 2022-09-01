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
    }
  };
  console.log(options.name);
}
workWithOptionObj();