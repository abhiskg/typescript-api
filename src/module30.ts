// Fn expression
const multiply = (a: number, b: number, c: number) => a * b * c;
console.log(multiply(2, 3, 5));

// Three line string
const lines = `I am a web developer.
I love to code.
I love to eat biryani`;
console.log(lines);

// Default parameter
const addition = (num1: number, num2 = 2) => num1 + num2;
console.log(addition(2));

// Even Friends
const arrayOfFriends = (friends: string[]) => {
  const evenFriends: string[] = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      evenFriends.push(friend);
    }
  }
  return evenFriends;
};
console.log(arrayOfFriends(["Abhi", "Sakib", "Rahul", "Runa"]));

// Average squared Element
const averageOfSquared = (numbers: number[]) => {
  let sum = 0;
  numbers.forEach((number) => {
    const squareValue = Math.pow(number, 2);
    sum = sum + squareValue;
  });
  return sum / numbers.length;
};
console.log(averageOfSquared([2, 2, 2]));

// Max of two arrays
const maxNum = (num1: number[], num2: number[]) => {
  const newArray = [...num1, ...num2];
  return Math.max(...newArray);
};
console.log(maxNum([2, 3, 4], [5, 6, 7]));

x = 8;
console.log(x); //output : 8
var x;
