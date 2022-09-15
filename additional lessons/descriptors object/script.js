"use strict";
// descriptors object

// writable
// enumerable
// configurable

const objUser = {
  name: 'Alex',
  surname: 'Smithe',
  birthday: '20/04/1993',
  shiwMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
};

Object.defineProperty(objUser, 'birthday', {writable: false});

// console.log(Object.getOwnPropertyDescriptor(objUser, 'name'));

// Object.defineProperty(objUser, 'name', {writable: false});
// objUser.name = "dsfsdf"; -- only read
// Object.defineProperty(objUser, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(objUser, 'gender'));