const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  // Get the token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (token == null) {
    return res.sendStatus(401); // No token provided
  }

  jwt.verify(token, "YOUR_SECRET_KEY", (err, user) => {
    if (err) {
      return res.sendStatus(403); // Invalid token
    }

    req.user = user;
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = authenticateToken;
