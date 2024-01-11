const person = {
  name: "Manikandan Anbalagan",
  age: 33,
  location: "Chennai",
};

let name = "MK";
// let age = person.age;
// let location = person.location;

const { age, location } = person;

console.log(`${name}, ${age}, ${location}`);

const fruits = ["Orange", "Apple", "Banana"];

// let firstFruit = fruits[0];
// let secondFruit = fruits[1];
// let thirdFruit = fruits[2];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(`${firstFruit}, ${secondFruit}, ${thirdFruit}`);
