// callBack
function withCallBack(src,callBack){
  console.log("src");
  let someNewValue = ()=> callBack(src);
}

withCallBack("some link",()=>{
  console.log("second value");

});