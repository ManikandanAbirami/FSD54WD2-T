const express = require("express");
const app = express();
const port = 3000;

// Define a route for GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.send(
    "(From Express)-Hello, World!\n Welcome, FSDWD-2 Tamil Batch People!!!"
  );
});

app.get("/home", (req, res) => {
  res.send("Welcome to HOME, FSDWD-2 Tamil Batch People!!!");
});

app.get("/dashboard", (req, res) => {
  res.send("Welcome to DASHBOARD, FSDWD-2 Tamil Batch People!!!");
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
