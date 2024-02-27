const config = require("../config/config");
const app = require("./express");
const mongoose = require("mongoose");

//Connect to MongoDB
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(
    "Server started on port %s.",
    config.port + " " + config.mongoUri
  );
});
