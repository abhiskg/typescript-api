"use strict";
// Map vs forEach
const users = [1, 2, 3, 4, 5];
const result = users.forEach((x) => x * x);
console.log(result); //undefine
const result1 = users.map((x) => x * x);
console.log(result1); //[ 1, 4, 9, 16, 25 ]
// Map devide by 3
const devideBy3 = [9, 27, 30].map((x) => x / 3);
console.log(devideBy3);
//
const products = [
    { id: 1, name: "laptop", price: 43000 },
    { id: 2, name: "mobile", price: 3000 },
    { id: 3, name: "tablet", price: 400 },
    { id: 4, name: "mouse", price: 200 },
];
const nameArray = products.map(({ name }) => name);
console.log(nameArray);
// Filter method
const numbers = [3, 56, 33, 12, 43, 19, 20, 21];
const smallNum = numbers.filter((number) => number > 20);
const even = numbers.filter((num) => num % 2 === 0);
console.log(smallNum); //[ 56, 33, 43, 21 ]
console.log(even); //[ 56, 12, 20 ]
// Find Method
const nums = [4, 34, 6, 7, 20, 36, 35];
const divisibleBy5 = nums.find((x) => x % 5 === 0);
console.log(divisibleBy5); //20
// Reduce
const num1 = [1, 2, 3, 4, 5];
const initialValue = 0;
const sum = num1.reduce((prevValue, currentValue) => prevValue + currentValue, initialValue);
console.log(sum); //15
