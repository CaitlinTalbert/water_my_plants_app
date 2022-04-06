const User = require("./users-model");

async function validateBody(req, res, next) {
  const { username, password, phoneNumber } = req.body;
  if (!username || !password || !phoneNumber) {
    res.status(400).json("username, password and a phoneNumber required");
  } else {
    req.userInput = req.body;
    next();
  }
}

async function checkIfExists(req, res, next) {
  User.findByUsername(req.userInput.username).then((user) => {
    if (!user) {
      next();
    } else {
      res.status(400).json("username already exists");
    }
  });
}

async function checkAuth(req, res, next) {
  User.findByUsername(req.userInput.username).then((user) => {
    if (!user) {
      res.status(404).json("invalid credentials");
    } else {
      req.user = user;
      next();
    }
  });
}

module.exports = { validateBody, checkIfExists, checkAuth };
