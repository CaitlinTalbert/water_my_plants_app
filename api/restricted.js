const { JWT_SECRET } = require("../api/secrets");
const jwt = require("jsonwebtoken");

const restricted = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({ status: 401, message: "Token required" });
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      next({ status: 401, message: "Token invalid" });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};

module.exports = { restricted };
