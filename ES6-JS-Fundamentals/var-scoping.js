//Variables are used to store data values. ES6 introduced 'let' and 'const' for block-level scoping,
//in addition to 'var' which is a funciton-scoped

var name = "John Jacob"; //can be re-declared and updated
let age = 33; //can be updated but not re-declared
const birthday = "January 1, 1990"; // is a constant that cannot be updated/re-declared

var flag = true;

function variableScopeExample() {
  if (flag) {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
  }
  console.log(varVariable);
  //   console.log(letVariable);
  //   console.log(constVariable);
}

variableScopeExample();

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); //0, 1, 2
}
