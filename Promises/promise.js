// Syntax of promise object
//let promiseObj = new Promise((resolve, reject) => {
//Producing code
//});

//Example code

let promiseObj = new Promise((resolve, reject) => {
  console.log("Getting name from DB...");
  //   setTimeout(() => {
  // resolve("Manikandan Anbalagan");
  reject(new Error("Could not get the name from DB."));
  //   }, 3000);
});

console.log("Promises in advanced JS:", promiseObj);
