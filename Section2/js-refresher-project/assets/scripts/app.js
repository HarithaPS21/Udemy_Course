import apiKey, { greetUser } from "./utils.js";

const greeting = greetUser("Haritha", "Hi");
console.log(greeting);

console.log("API Key = ", apiKey);

// Objects - an instance of a class
// a non-primitive datatype that groups data and functions together
// properties - data
// Methods - behaviour / functionality
const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log(`Hi ${this.name}`);
  },
};

console.log(user.age);
user.greet();

// class - a blueprint for creating multiple objects of the same kind
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  createGreeting() {
    console.log(`Hi ${this.name}`);
  }
}
// instantiation of class & initialisation
const user1 = new User("Maximilian", 34);
user1.createGreeting();

// arrays - a special type of objects to store an ordered list of values that can be accessed by their position
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);
// array utility methods
hobbies.push("Working");
console.log(hobbies);
const index = hobbies.findIndex((item) => item === "Sports");
console.log(index);
const edittedHobbies = hobbies.map((item) => ({ text: item }));
console.log(edittedHobbies, hobbies);
const updatedHobbies = hobbies.forEach((item) => ({ val: item }));
console.log(updatedHobbies, hobbies);

// Destructuring in arrays
const userName = ["Maximilian", "Shakesphere"];
// const firstName = userName[0];
// const lastName = userName[1];
const [firstName, lastName] = userName;
console.log(firstName, lastName);

// Destructuring in objects
const person = {
  name: "Max",
  age: 34,
};
const { name: personName, age } = person;
console.log(personName, age);

// spread operator
const hobbiesList = ["Sports", "Cooking"];
const newHobbiesList = ["Reading"];
const mergedHobbiesList = [...hobbiesList, ...newHobbiesList];
console.log(mergedHobbiesList);

const userObj = {
  name: "Mark Clinton",
  age: 35,
};
const extendedUser = {
  isAdmin: true,
  ...userObj,
};
console.log(extendedUser);

//  control structures
const password = prompt("Enter your password");
if (password === "Hello") {
  console.log("Hello works!");
} else if (password === "hello") {
  console.log("hello");
} else {
  console.log("Access not granted!");
}

// for loop
const hobs = ["Sports", "Cooking"];
for (const hob of hobs) {
  console.log(hob);
}

// DOM manipulation
// const list = document.querySelector("ul");
// list.remove();

// passing functions as values to functions
const handleTimeout = () => {
  console.log("Time out!");
};

setTimeout(handleTimeout, 2000);
setTimeout(() => {
  console.log("Time out again!");
}, 3000);

// defining functions inside functions
function init() {
  function greet() {
    console.log("Hey...");
  }
  greet();
}

init();


// Primitive vs Reference values
let userMessage = "Hello";


