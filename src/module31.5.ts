// Addition multiplication
const sumMultiplication = (num1: number, num2: number) => {
  return (num1 + 2) * (num2 + 2);
};
console.log(sumMultiplication(5, 3));

// odd numbers
const evenOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNums = evenOdd.filter((num) => num % 2 !== 0);
console.log(oddNums);
