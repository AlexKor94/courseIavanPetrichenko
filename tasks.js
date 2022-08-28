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

// Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Место для первой задачи
function calculateVolumeAndArea(value) {
  if(value > 0 && Number.isInteger(value)){
    let area = (value*value)*value;
    let volume = 6*(value*value);
    return `Объем куба: ${area}, площадь всей поверхности: ${volume}`;
  }else{
    return 'При вычислении произошла ошибка';
  }
}

function calculateVolumeAndAreaFromTeatcher(length) {
  if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
      return "При вычислении произошла ошибка";
  }

  let volume = 0,
      area = 0;
  
  volume = length * length * length;
  // length ** 3 - это тоже самое, что и выше или варианты через цикл.
  // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
  area = 6 * (length * length);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// 1 - 1,2,4; 2 - 5,6,7,8; 3 - 10,12,9,11
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// Пример:
// getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.
// Место для второй задачи
function getCoupeNumber(numSeat) {
  let res;
  let arr = [];
  let numCoupe = 1;

  for(let i = 0; i < 9; i++){
    let tempArr = [];
    for(let j = 0; j < 4; j++){  
     tempArr.push(numCoupe);
     numCoupe++;
    }
    arr.push(tempArr);
  }
  console.log(arr);
  if(numSeat === 0 || numSeat>36){
    res = "Таких мест в вагоне не существует";
  }else if(numSeat<0 || !Number.isInteger(numSeat)){
    res = "Ошибка. Проверьте правильность введенного номера места"; 
  }else{
    for (let i = 0; i < arr.length; i++){
      let coupe,resNum;   
      coupe = (element) => element === numSeat;
      resNum = arr[i].findIndex(coupe);   
      if(resNum>-1){
        res = i+1;
        break;
      }else{
        continue;
      }
    
    }
  }
return res;
}

function getCoupeNumberFromTeacher(seatNumber) {
  if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
      return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (seatNumber === 0 || seatNumber > 36) {
      return "Таких мест в вагоне не существует";
  }

  for (let i = 4; i <= 36; i = i + 4) {
      if (seatNumber <= i) {
          return Math.ceil(i / 4);
      }
  }
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
// Место для первой задачи
function getTimeFromMinutes(minutes) {
  if(!Number.isInteger(minutes) || minutes < 0){
    return "Ошибка, проверьте данные";
  }
  let hours =  Math.floor(minutes / 60);
    return hours;
}

console.log(getTimeFromMinutes(301));


// Место для второй задачи
function findMaxNumber() {

}