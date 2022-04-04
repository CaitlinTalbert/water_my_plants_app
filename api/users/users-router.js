const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./users-model");

//bring in middleware
const {} = require("./users-middleware");

//get all user
router.get("/", (req, res, next) => {});

//get user by an ID
router.get("/:user_id", (req, res, next) => {});

//register new user, username, phone number, and password
router.post("/register", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
});

//user can login
router.post("/login", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
});

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
