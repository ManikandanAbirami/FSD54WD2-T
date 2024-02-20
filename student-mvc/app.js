const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const studentController = require("./controllers/studentController");

const app = express();

mongoose
  .connect("mongodb+srv://guvi:guvi@fsdwd2-t.lhqxodp.mongodb.net/student_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", studentController.getStudents);
app.post("/students", studentController.createStudent);
app.delete("/students/:id", studentController.deleteStudent);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
