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
// test
function getTimeFromMinutesFromTeacher(minutes) {
  if(!Number.isInteger(minutes) || minutes < 0){
    return "Ошибка, проверьте данные";
  }

  let hours =  Math.floor(minutes / 60);
  let prefix;
  if(hours === 0 || hours > 4){
   prefix = hours + " часов"; 
  }else if(hours === 1){
   prefix = hours + " час"; 
  }else{
   prefix = hours + " часа"; 
  }
  let minute = minutes - (hours*60);
    return `Это ${prefix} и ${minute} минут`;
}

function getTimeFromMinutes(minutesTotal) {
  if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
      return "Ошибка, проверьте данные";
  }

  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;

  let hoursStr = '';

  switch (hours) {
      case 0: 
          hoursStr = 'часов';
          break;
      case 1:
          hoursStr = 'час';
          break;
      case 2:
      case 3:
      case 4:
          hoursStr = 'часа';
          break;
      default:
          hoursStr = 'часов';
  }

  return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}


// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Пример:

// Место для второй задачи
function findMaxNumber(number1, number2, number3, number4) {
  let arr = [number1, number2, number3, number4];
  let res = arr.filter((num) => {
   return typeof num !== "number";
  })
  return  res.length > 0 ? 0 : Math.max(number1, number2, number3, number4);
}

function findMaxNumberFromTeacher(a, b ,c, d) {
  // Самое простое - это использовать Math.max :)
  // А оптимизировать такую проверку мы научимся совсем скоро
  if (typeof(a) !== 'number' ||
      typeof(b) !== 'number' ||
      typeof(c) !== 'number' ||
      typeof(d) !== 'number') {
      return 0;
  } else {
      return Math.max(a, b ,c, d);
  }
}

function findMaxNumberLaz(num1, num2, num3, num4) {
  if (typeof(num1, num2, num3, num4) !== 'number') {
      return 0
  }
  return Math.max(num1, num2, num3, num4);
  }

  // Задача с собеседований на числа Фибоначчи
// Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.
// Сразу скажу, что есть варианты решения через прием, называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂
// Задача:
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"
// Задача непростая для новичков, так что с первого раза может не получится.

function fib(num) {
 if(typeof num !== "number" || num === 0 || !Number.isInteger(num)){
  return '';
 }

 if(num === 1){
  return "0";
 }

 let res = "";
 let arr = [0,1];
 for(let i = 1; arr.length < num; i++){
  arr.push(arr[i]+arr[i-1]);
 }  
 res = arr.join(' ');
 return res;
}

// Answer from teacher:
function fibFromTeacher(num) {
  if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
      return "";
  }

  let result = '';
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
      if (i + 1 === num) {
          result += `${first}`;
          // Без пробела в конце
      } else {
          result += `${first} `;
      }

      let third = first + second;
      first = second;
      second = third;
  }

  return result;
}

// Задачи:
// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно
// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
function getData(){
  const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
        showAgeAndLangs: (plan) => {
        const {age} = plan;  
        const {languages} = plan.skills;  
        return `Мне ${age} и я владею языками: ${languages.join(" ").toUpperCase()}`;
    }
  };
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));  
return personalPlanPeter;
}
getData()

function showExperience(plan) {
  const {exp} = plan.skills;
  return exp;
}

//showExperience(getData());

function showProgrammingLangs(plan) {
let res = '';  
let {programmingLangs} = plan.skills;
if(Object.keys(programmingLangs).length > 0){
  for(let key in programmingLangs){
    res = res + `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  res.trim();
  return res;
} 
  return res;
}

console.log(showProgrammingLangs(getData()));

// decision from the teacher

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function(plan) {
      const {age} = plan;
      const {languages} = plan.skills;
      let str = `Мне ${age} и я владею языками: `;

      languages.forEach(function(lang) {
          str += `${lang.toUpperCase()} `;
      });

      return str;
  }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
  const {exp} = plan.skills;
  return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
  let str = '';
  const {programmingLangs} = plan.skills;
  for (let key in programmingLangs) {
      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
  }

  return str;
}

showProgrammingLangs(personalPlanPeter);

// Задачи:
// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
 if(arr.length > 0){
  const str = arr.join(" ");
  return `Семья состоит из: ${str}`;
 }else{
  return `Семья пуста`;
 }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
 arr.forEach((el)=>{
  console.log(el.toLowerCase());
 });
}

//decision from teacher
//const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}

showFamily(family);

//const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.
// Может показать сложной с первого взгляда, но это совсем не так 🙂
// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку
const someString = 'This is some strange string';

function reverse(str) {
  if(typeof str !== "string"){
    return 'Ошибка!';
  }
      let newStr = '';  
      let arr = str.split(' ');
      arr = arr.reverse();
      arr.forEach((word)=>{
      let newArr = word.split('');
      newStr += newArr.reverse().join('') + " ";
      });  
    return newStr.trim();
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
if(arr.length === 0){
  return 'Нет доступных валют';
}
let res = "Доступные валюты:"
let newArr = arr.filter(el => el !== missingCurr);
newArr.forEach((el)=>{
  res += '\n' + el;
});
  return res;
}

console.log(availableCurr(additionalCurrencies, 'RUB'));

//decision from teacher

// const someString = 'This is some strange string';
function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}
console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');


// Задача:
// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂
// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let totalSquer = 0;
  let needPay = 0;
  let arr = data.shops;
  arr.forEach((obj) => {
    totalSquer += obj.width * obj.length;
  });
  let totalStoreVolumePay = (totalSquer * data.height)*data.moneyPer1m3;
  if(totalStoreVolumePay <= data.budget){
    return 'Бюджета достаточно';
  }
    return 'Бюджета недостаточно';
}

// from teacher: 
function isBudgetEnoughTeacher(data) {
  let square = 0;
  let volume = 0;

  data.shops.forEach(shop => {
      square += shop.width * shop.length;
  });

  volume = data.height * square;

  if (data.budget - (volume * data.moneyPer1m3) >= 0) {
      return 'Бюджета достаточно';
  } else {
      return 'Бюджета недостаточно';
  }
}

// Задача:
// У вас есть список учеников, которые хотят поиграть в игру:
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.

// ["Foo", "bar"].sort(function (a, b) {
//   return a.toLowerCase().localeCompare(b.toLowerCase());
// });

//const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];
//const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
  const str = "";
  let resArr = [];
  let tempArr = [];
  const newArr = students.sort(function(a,b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  newArr.forEach((name, i)=>{
    tempArr.push(name);
    if(tempArr.length === 3){
      resArr.push(tempArr); 
      tempArr = [];
  //    console.log(`i = ${i} && naewArr length = ${newArr.length}`);
    }
    if(i + 1 === newArr.length){
 //     console.log('start');
      let str = 'Оставшиеся студенты: ' + tempArr.length > 0 ? tempArr.join(", ") : "-";
      resArr.push(str);
    }
  });
  return resArr;
}

console.log(sortStudentsByGroups(students));

// from Teacher:

//const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(sortStudentsByGroups(students));

// empty array always = "";
// [] = "";

// Какое будет выведено значение: let x = 5; alert( x++ ); ? // I think - 5
// teacher: 5
// Чему равно такое выражение: [ ] + false - null + true ? // error
// teacher: NaN
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? // 2
// teacher: 2
// Чему равна сумма [ ] + 1 + 2? // "12"
// teacher: "12";
// Что выведет этот код: alert( "1"[0] )? "1"
// teacher: "1"
// Чему равно 2 && 1 && null && 0 && undefined ? false
// teacher: null;
// Есть ли разница между выражениями? !!( a && b ) и (a && b)? ні
// teacher: Так  bool !== 
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ? true
// teacher: 3
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? Yes
// teacher:  No it two different boxes
// Что выведет этот код: alert( +"Infinity" ); type number Infinity
// teacher: Infinity
// Верно ли сравнение: "Ёжик" > "яблоко"? // так
// teacher: 
// Чему равно 0 || "" || 2 || undefined || true || falsе ?
// teacher: 2

//&& - запинается на лжи
//|| - запинается на правде

// Задание:
// У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. Нужно исправить функции так, чтобы они давали всегда правильный результат.
// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.
// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).
// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.
// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.
// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.

const restorantData = {
  menu: [
      {
          name: 'Salad Caesar',
          price: '14$'
      },
      {
          name: 'Pizza Diavola',
          price: '9$'
      },
      {
          name: 'Beefsteak',
          price: '17$'
      },
      {
          name: 'Napoleon',
          price: '7$'
      }
  ],
  waitors: [
      {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Открыто' : answer = 'Закрыто';

  return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
  console.log(+fDish.price.slice(0, -1));
  if (+fDish.price.slice(0, -1) + +(sDish.price.slice(0, -1)) < +average.slice(0, -1) ) {
      return 'Цена ниже средней';
  } else {
      return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
  const copy = JSON.parse(JSON.stringify(data));
 // const copy = Object.assign({}, data);

  copy.waitors[0] = {name: 'Mike', age: 32};
  return copy;
}

transferWaitors(restorantData);

// Напишите функцию, которая вычисляет факториал.
// Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.
// Сам же факториал с примерами выглядит вот так:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// То есть, вызов нашей функции factorial(5) возвращает число 120
// factorial(4) => 24

 let Num = 0;
// function factorial(n) {
//    if(!Number.isInteger(n)){
//       return "You must enter an integer";
//    }
  
//    if (n === 0){
//     return Num;
//    }

//    Num *= n;
//    return factorial(n-1);
  
// }

// console.log(factorial(4));


// =========== Teacher ================
function factorial(n) {

  if (typeof(n) !== 'number' || !Number.isInteger(n)) {
      return "Ошибка, проверьте данные";
  }
   
   if (n >= 1) {
       return n * factorial(n - 1);
   } else {
       return 1;
   }

  // Более короткий вариант, который вы можете встретить
  // Но не учитывает отрицательные значения
  // return n ? n * factorial(n - 1) : 1;
}

//console.log(factorial(4));

// Задание:
// В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.
// Пример:
// Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
// from teacher:
function amountOfPages(summary){
  let result = '';
  let n = 0;

  for (let i = 1; i <= summary; i++) {
    result += i;
    if (result.length === summary) {
      n = i;
      break;
    }
  }

  return n;
}

// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.
// Пример:
// isPangram(«The quick brown fox jumps over the lazy dog») => true
// isPangram(«Hello world») => false

// My solution (I know about regExp, but I want to do this with array):  
function isPangram(str = ""){
  const string = str.toUpperCase();
  const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ];
  let i = string.length;

  while(i--){
    let index = alphabet.indexOf(string.charAt(i));
    if (index > -1){
      alphabet.splice(index, 1);
    }
  }
  if( alphabet.length === 0) {
    return true;
  } else {
    return false;
  }
}

//console.log(isPangram("The quick brown fox jumps over the lazy dog"));

//  ===== Teacher Solution +++++ 
// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера

// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }

// // С другим методом и строка каждый раз преобразовывается в коллбэке
// function isPangram(string){
//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every((x) => string.toLowerCase().includes(x));
// }

// // При помощи цикла
// function isPangram(str) {
//   letters: for (var c = 0; c < 26; c++) {
//       for (let i = 0; i < str.length; i++) {
//           let s = str.charCodeAt(i)
//           if (s < 65 || s > 90 && s < 97 || s > 122) continue
//           if (s === 65 + c || s === 97 + c) continue letters
//       }
    
//       return false
//   }
  
//   return true
// }

// // При помощи Set
// function isPangram(string) {
//   return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
// }

// // С использованием регулярных выражений
// function isPangram(string){
//   return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;

// Задание:

// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:
// deepCount([1, 5, 3]) => 3
// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
// deepCount([1, 2, [3, 4, [5]]]) => 7
// deepCount([]) => 0
// deepCount([[[[[[[[[]]]]]]]]]) => 8

// ========== My Solution : =====================

function deepCount(a = []){
  let count = 0;
  couting (a);
  function couting (a) {
    a.forEach(el => {
      count += 1;
      if(Array.isArray(el)){
      return  couting (el);
      }
    });
  }
  return count;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));

// ========== Teacher Solution : =====================

// Вариант с циклом
function deepCount1(a){
  let count = a.length;
  for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
  return count;
}

// Вариант с методом reduce
function deepCount2(a){
  return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}
