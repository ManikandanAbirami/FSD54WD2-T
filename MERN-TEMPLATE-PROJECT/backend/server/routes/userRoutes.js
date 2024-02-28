const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/api/users").get(userController.list).post(userController.create);

router
  .route("/api/users/:userId")
  .get(userController.read)
  .put(userController.update)
  .delete(userController.remove);

// router.param("userId", userController.userByID);

module.exports = router;
