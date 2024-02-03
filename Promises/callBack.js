let add = (callback) => {
  let x = 2,
    y = 3;
  console.log("Sum: ", x + y);
  callback();
};

const subtract = (callback) => {
  let x = 2,
    y = 3;
  console.log("Difference: ", x - y);
  callback();
};

const displayCompletion = () => {
  console.log("Finished this operation!");
};

add(displayCompletion);
subtract(displayCompletion);
