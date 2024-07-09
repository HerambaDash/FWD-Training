require("core-js/actual/array/group-by");

let a = [1,2,3,4,5,6];
let filteredArray = a.filter(item => item >= 2 && item < 6)
// console.log(filteredArray);

const b = [2,3];
const c = { a : 1, b : 2};

// b = [3,4];
// console.log(b);

const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

let group1 = fruits.filter(item => item.quantity > 200);
let group2 = fruits.filter(item => item.quantity <= 200);
let result23 = { group1 : group1, group2 : group2};
// console.log(result23);

function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

const result = fruits.groupBy(myCallback);
// const result = fruits.groupBy(item => { return item.quantity > 200 ? "group1" : "group2"});
// console.log(result);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName 
}

let p1 = new Person("John", "Doe");
// console.log(p1.name());


// console.log(p1);
p1.nationality = "Indian";
// console.log(p1);

Object.defineProperty(p1, "language", {
  value : "English",
  writable: true,
  enumerable: false,
  configurable: true,
});
// console.log(p1);

let dvalue = "78";
Object.defineProperty(p1, "dynamic", {
  get() {
    return dvalue;
  },
  set(newValue) {
    dvalue = newValue;
  },
  enumerable: true,
  configurable: true,
})
// console.log(p1.dynamic);
p1.dynamic = 50;
// console.log(p1);
// console.log(p1.dynamic);

// console.log(Object.getOwnPropertyNames(p1));
// console.log(Object.keys(p1));

// console.log(Object.hasOwnProperty(p1, "firstName"));

let x1 = [1,2,3];
let x2 = [a, b, c];
let x = [...x1, ...x2];
// console.log(x);

let p2 = { ...p1 };
// console.log(p2);
p2.nested = {
  a : 1,
  b : {
    c : 2
  }
};
let p3 = { ...p2 };
// console.log(p3);

// const { firstName, lastName } = p1;
// console.log(firstName);

// const { firstName, lastName } = p1;
// console.log(firstName + " " + lastName);

// console.log(p1);
const { firstName, ...rest } = p1;
// console.log(rest);

// JSON
let s = '{"name":"John", "age":30, "city":"New York"}';
let so = JSON.parse(s);
// console.log(so);
so.language = "English";
// console.log(so);
let newS = JSON.stringify(so);
// console.log(newS);
const arr = ["John", "Peter", "Sally", "Jane"];
let jsonArr = JSON.stringify(arr);
// console.log(jsonArr);
