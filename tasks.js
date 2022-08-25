// Место для первой задачи
function sayHello(name) {
  return `Привет, ${name}`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
  let arr = [
    num-1,
    num,
    num+1
  ];
  return arr;
}

// Место для третьей задачи
function getMathResult(basedNum, multiplierNum) {
  let str;
  if (typeof multiplierNum !== "number" || multiplierNum < 1) {
    str = basedNum;
  }else{ 
    str = basedNum;  
    for (let i = 2; i <= multiplierNum; i++){
      str = `${str}---${basedNum * i}`;
    }  
  }
  return str;
}