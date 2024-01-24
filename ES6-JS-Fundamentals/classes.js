class Person {
  constructor() {
    this.name = "Guvi";
    this.age = 33;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

let person1 = new Person(); // let objName = new className();
console.log(person1.greet());
