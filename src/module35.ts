// Object
const student = {
  name: "Abhi",
  money: 5000,
  showName: function () {
    console.log(`his name is ${this.name}`);
  },
  employment: {
    company: "Rocky",
  },
  improveExam: function (subject: string) {
    this.showName();
    return `Subject: ${subject}`;
  },
  treatDey: function (amount: number) {
    this.money = this.money - amount; //We can also chage object value
    return this.money;
  },
};
const exam = student.improveExam("Math");
console.log(exam);
console.log(student.treatDey(4000));

// Accessing Object method from another object
const badamAli = {
  name: "Kacha Badam",
  money: 6000,
};

const badamMoney = student.treatDey.call(badamAli, 2000);
console.log("Badam money", badamMoney); //4000
const badamMoney2 = student.treatDey.apply(badamAli, [2000]);
console.log("Badam money2", badamMoney2); //2000

const bindBoth = student.treatDey.bind(badamAli);
const badamMoney3 = bindBoth(500);
console.log(badamMoney3); //1500

// Accessing Object
interface Bottle {
  color: string;
  price: number;
  isCleaned?: boolean;
}
const bottle: Bottle = { color: "white", price: 100, isCleaned: true };
const keys = Object.keys(bottle);
console.log(keys); //[ 'color', 'price', 'isCleaned' ]

const values = Object.values(bottle);
console.log(values); //[ 'white', 100, true ]

const pair = Object.entries(bottle);
console.log(pair); //[ ['color', 'white'], ['price', 100], ['isCleaned', true] ]

// Object.seal(bottle);
// Object.freeze(bottle);
// delete bottle.isCleaned;
console.log(bottle); //{ color: 'white', price: 100, isCleaned: true }

// for (const key in bottle) {
//   console.log(key, bottle[key]);
// }

for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}

// Same property object can't be same bcz of reference
const first = { a: 2 };
const second = { a: 2 };
const third = second;
if (third === second) {
  console.log("same"); //same
} else {
  console.log("diffrence");
}
