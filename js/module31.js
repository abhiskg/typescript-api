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
// Odd to Even
const oddNumbers = [1, 3, 5, 7, 9];
const evenNum = oddNumbers.map((num) => num + 1);
console.log(evenNum);
// Array divisible by 10
const allNum = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = allNum.filter((num) => num % 10 === 0);
const singleNumDivisibleBy10 = allNum.find((num) => num % 10 === 0);
console.log(divisibleBy10);
console.log(singleNumDivisibleBy10);
// Add all element
const allNums = [1, 9, 17, 22];
const resultNum = allNums.reduce((prev, curr) => prev + curr, 0);
console.log(resultNum);
// Sum of age
const peoples = [
    { name: "Meena", age: 20 },
    { name: "Rina", age: 15 },
    { name: "Suchorita", age: 22 },
];
// For loop
let sumOfAge = 0;
peoples.forEach((people) => {
    sumOfAge = sumOfAge + people.age;
});
console.log(sumOfAge);
// Reduce
const ageSum = peoples.reduce((prev, curr) => prev + curr.age, 0);
console.log(ageSum);
