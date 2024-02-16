/**
 * OPERATION 1
 * Function to get the user name from the server
 */
const getUserName = () => {
  let name = null;
  setTimeout(() => {
    name = "Manikandan Anbalagan";
    console.log(name);
  }, 2000);
};

/**
 * OPERATION 2
 * Function to get the past orders from the server
 */
const getPastOrders = () => {
  let orderDetails = null;
  setTimeout(() => {
    orderDetails = {
      orderId: "2001",
      amount: 4500,
      discount: 45,
    };
    console.log(orderDetails);
  }, 2000);
};
getPastOrders();
getUserName();
