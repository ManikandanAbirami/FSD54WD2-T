// syntax
// promiseObj.then(successCallback, errorCallback);

// promiseObj.then(
//   (parametersToHoldArgumentsPassedWhenPromiseIsResolved) => {},
//   (parametersToHoldArgumentsPassedWhenPromiseIsRejected) => {}
// );

// promiseObj.then(
//   (val) => {},
//   (err) => {}
// );

let promiseObj = new Promise((resolve, reject) => {
  console.log("Getting name from DB...");
  setTimeout(() => {
    // resolve("Manikandan Anbalagan");
    reject(new Error("Could not get the name from DB."));
  }, 2000);
});

promiseObj.then((val) => {
  console.log(`Name received from DB = ${val}.`);
});

promiseObj.catch((err) => {
  console.log(`Catch Error occurred = ${err}.`);
});
