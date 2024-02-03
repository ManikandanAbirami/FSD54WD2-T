const getName = async () => {
  let name = await namePromise;
  console.log(`Name received from DB = ${name}.`);
};

let namePromise = new Promise((resolve, reject) => {
  console.log("Getting name from DB..");
  setTimeout(() => {
    resolve("Manikandan Anbalagan");
    // reject("Error retrieving name from DB...");
  }, 1000);
});

const getName1 = () => {
  namePromise.then((val) => {
    console.log(`Name received from DB = ${val}.`);
  });
};

getName1();

// let res = () => Promise.resolve("Manikandan Anbalagan");
// console.log("res: ", res);

// res().then((val) => alert(val));

// let res = async () => "Manikandan Anbalagan";
// console.log("res: ", res);

// res().then((val) => alert(val));
