// Syntax of setTimeout() method
// setTimeout(()=>{}, timeInMs);

console.log("1.This is executed immediately.");

// Code Example
setTimeout(() => {
  console.log("2.This is executed after 3 seconds.");
}, 3000);

console.log("3.This is executed at last.");
