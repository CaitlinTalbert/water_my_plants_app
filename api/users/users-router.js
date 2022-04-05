const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./users-model");

//bring in middleware
const {
  validateBody,
  checkIfExists,
  checkAuth,
} = require("./users-middleware");
const saltRounds = 8;

//get all user
router.get("/", async (req, res) => {
  try {
    User.getAllUsers().then((users) => {
      res.status(200).json(users);
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//get user by an ID
router.get("/:user_id", (req, res, next) => {});

//register new user, username, phone number, and password
router.post("/register", validateBody, checkIfExists, async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.userInput.password, saltRounds);
    const obj = {
      username: req.userInput.username,
      password: hash,
      phoneNumber: req.userInput.phoneNumber,
    };
    User.insertUser(obj)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "internal database error", error: err });
      });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
});

//user can login
router.post("/login", validateBody, checkAuth, async (req, res, next) => {
  try {
    if (bcrypt.compareSync(req.userInput.password, req.user.password)) {
      const payload = {
        user_id: req.user.id,
        username: req.user.username,
        phone_number: req.user.password,
      };
      const token = generateToken(payload);
      res.status(200).json({ message: `Welcome, ${req.user.username}`, token });
    } else {
      res.status(400).json("invalid credentials");
    }
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
});

function generateToken(payload) {
  return jwt.sign(payload, "JWT_SECRET", { expiresIn: "1d" });
}

//update a users phone number and password
router.put("/:user_id", (req, res, next) => {});

//delete a user by ID
router.delete("/remove/:user_id", (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = router;
