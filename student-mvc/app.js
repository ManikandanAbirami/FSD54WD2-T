const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const studentController = require("./controllers/studentController");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/student_db", {
    //mongodb+srv://guvi:guvi@fsdwd2-t.lhqxodp.mongodb.net
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", studentController.getStudents);
app.get("/students/:id/edit", studentController.getEditForm);
app.post("/students", studentController.createStudent);
app.put("/students/:id", studentController.updateStudent);
app.delete("/students/:id", studentController.deleteStudent);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
