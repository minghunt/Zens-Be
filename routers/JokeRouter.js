const express = require("express");
const JokeController = require("../controllers/JokeController");

const route = express.Router();
route.get("/get", JokeController.getJoke);
route.post("/vote", JokeController.voteJokeById);

module.exports = route;
