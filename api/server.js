const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const usersRouter = require("./users/users-router");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
