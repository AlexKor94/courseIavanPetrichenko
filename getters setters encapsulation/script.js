'use strict';
const ivanObj = {
  name: 'Alex',
  age: 25,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    this.age = num + 5;
  } 
};
console.log(ivanObj.userAge = 30);
console.log(ivanObj.age);
console.log(ivanObj.userAge);


//  ENCAPSULATION
//  Constructor Function 
// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function() {
//     console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//   };

//   this.getAge = function() {
//     return userAge;
//   };

//   this.setAge = function(age) {
//     if( typeof age === 'number' && age > 0 && age < 110){
//       userAge = age;
//     } else {
//       console.log('Недопустимое значение!');
//     }
    
//   };
// }

// const alex = new User('Alexandr', 28);
// console.log(alex.name);
// console.log(alex.getAge());
// alex.setAge(29);
// alex.setAge('Sasha');
// alex.say();

//  Classes 
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.userAge = age;
//   }

//   say() {
//     console.log(`Имя пользователя: ${this.name}, возраст: ${this.userAge}`);
//   }

//   get age() {
//     return this.userAge;
//   }

//   set age(age) {
//     if( typeof age === 'number' && age > 0 && age < 110){
//       this.userAge = age;
//     } else {
//       console.log('Недопустимое значение!');
//     }
    
//   }
// }

// const alex = new User('Alexandr', 28);
// console.log(alex.name);
// alex.userAge = 99;
// console.log(alex.getAge());
// alex.setAge(29);
// alex.setAge('Sasha');
// alex.say();

// HOMEWORK
class Colors {
  constructor(blue, red, green) {
    this._blue = blue;
    this._red = red;
    this._green = green;
  }

  #obj = "Object";

  get blue() {
    return this._blue;
  }

  get red() {
    return this._red;
  }

  get green() {
    return this._green;
  }

  set blue(blue){
    console.log(blue.match(/blue/ig));
    if(blue.match(/blue/ig)){
      this._blue = blue;
    } else {
      console.log("Err: RegExp doesn't match blue");
    }
  }

  set red(red){
    if(red.match(/.red./ig)){
      this._red = red;
    }
  }

  set green(green){
    if(green.match(/.green./ig)){
      this._green = green;
    }
  }

  say = () => {
    console.log(`You set to ${this.#obj} next colors: ${this._blue}, ${this._red}, ${this._green}`);
  }
}

const newDiv = new Colors('blue', 'red', 'green');
newDiv.blue = 'lightBlue';
newDiv.say();