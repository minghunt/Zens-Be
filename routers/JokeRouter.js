const express = require("express");
const JokeController = require("../controllers/JokeController");

const route = express.Router();
route.get("/joke", JokeController.getJoke);
route.get("/jokes", JokeController.getAllJokes);
route.post("/joke/vote", JokeController.voteJokeById);

module.exports = route;
