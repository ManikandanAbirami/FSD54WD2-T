let name;

const getName = (cb) => {
  setTimeout(() => {
    name = "Manikandan Anbalagan";
    cb(name);
  }, 2000);
};

const greet = (nameVal) => {
  console.log(`Hello ${nameVal}.`);
};

getName(greet);
