const express = require("express");
const userController = require("../controllers/userController");
const authenticateToken = require("../authenticateToken");

const router = express.Router();

// Apply authentication middleware to protected routes
router
  .route("/api/users")
  .get(authenticateToken, userController.list) // Protect the list route
  .post(userController.create); // Registration might not need protection

router
  .route("/api/users/:userId")
  .get(authenticateToken, userController.read) // Protect user profile access
  .put(authenticateToken, userController.update) // Protect profile update
  .delete(authenticateToken, userController.remove); // Protect delete operation

// router.param("userId", userController.userByID);

module.exports = router;
