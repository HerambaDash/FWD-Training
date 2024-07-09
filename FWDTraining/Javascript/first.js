function noReturn() {
  // console.log("This func does not return any value")
}

noReturn();

function returnValue() {
  return 5;
}

let x = returnValue();

// console.log(x);

function funcWithParameters(z) {
  // console.log(z);
}

funcWithParameters(10);

let func1 = function() {
  console.log("This is anonymous function");
}

// func1();

const arrowFunction = (z, y) => {
  // console.log("z" + z);
  // console.log("y" + y);
}

// arrowFunction(2);

// global scope - variable declared globally
// local scope - variable declared in function
// block scope - variable declared in a {}      eg. if {}

let arr1 = [1,2,3,4,5];
// console.log(arr1);
let arr2 = new Array(1,2,3);
arr2[5] = 6;
// arr[ind]
arr1.push(6);
// console.log(arr1);
// console.log(typeof arr1);
arr1.pop();
// console.log(arr1);
// console.log(arr1.length)
// console.log(arr1.toString())
// console.log(arr1.join("/"))
let m = arr1.shift();
// console.log(arr1);
// console.log(m);
arr1.unshift(1);
// console.log(arr1);
// console.log(arr1[2]);
// delete arr1[2];
// console.log(arr1[2]);
// console.log(arr1);
// arr1[2] = 4;
// console.log(arr1[2]);
// arr1.splice(2, 1);
// console.log(arr1);
// arr1.splice(5, 0, 6);
// console.log(arr1);
// let newArr1 = arr1.slice(3);
// let newArr2 = arr1.slice(1, 4);
// console.log(arr1);
// console.log(newArr2);
let arr3 = [4, 9, 16, 25, 25, 27];
// console.log(arr3.indexOf(25));
// console.log(arr3.lastIndexOf(25));
// console.log(arr3.includes(30));
// console.log(arr3.includes(29));
// function checking(value, index, array) {
//   return value > 25
// }
// (value, index, array) =>  value > 25
let ele1 = arr3.find((value, index, array) =>  value > 26 && value % array[1] === 0);
// console.log(ele1);
// findLast
let ele2 = arr3.findIndex((value, index, array) => value === 25);
// console.log(ele2);
// findLastIndex

let person1 = {};
// console.log(person1);
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 56;
// console.log(person1);

let person2 = new Object();
person2.firstName = "Jane";
person2.lastName = "Doe";
// console.log(person2);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

let person3 = new Person("John", "Doe");
// console.log(person3);

Object.assign(person2, person3);
// console.log(person2);

let arr4 = Object.entries(person1);
// console.log(arr4);
// let arr7 = arr4.flat();
// console.log(arr7);
let arr5 = Object.values(person1);
// console.log(arr5);
let arr6 = Object.keys(person1);
// console.log(arr6);

let arr10 = [
  {
    name : "xyz",
    age : "45",
    color : "blue"
  },
  {
    name : "abc",
    age : "56",
    color : "brown"
  },
  {
    name : "a1b1",
    age : "45",
    color : "black"
  },
  {
    name : "a2b2",
    age : "70",
    color : "yellow"
  },
]
// find the age of the person whose color is yellow
let arry = [1,3,5,7,9,11,18,21,21,21,30];
//find an element which is divisible by element at index 1 and index
// 3 and the found element must not have the index of 7 or 9