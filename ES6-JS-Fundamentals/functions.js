// function print(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// let result = print("Manikandan", "Anbalagan");
// console.log(result);

// const print1 = (firstName, lastName) => {
//   return firstName + " " + lastName;
// };

// let result1 = print1("Guvi", "FDS54");
// console.log(result1);

// function greeting(name) {
//   return "Hi! " + name;
// }

// let grt = greeting("Manikandan");
// console.log(grt);

// const greeting1 = (name) => {
//   return "Hi! " + name;
// };

// let grt1 = greeting1("Guvi-FSD54");
// console.log(grt1);

//Arrow funcitons don't have a 'this' keyword of thier own, so anything to do with 'this' keyword
//inside an arrow function will point to the scope of the function the arrow function is written inside.
let person = {
  firstName: "Manikandan",
  lastName: "Anbalagan",
  get: function () {
    console.log("Outer: ", this.firstName + " " + this.lastName);
    let print = () => {
      console.log("Inner: ", this.firstName + " " + this.lastName);
    };
    print();
  },
};

console.log(person.firstName + " " + person.lastName);
person.get();
