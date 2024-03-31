const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    content: String,
    funCount: Number,
    notFunCount: Number,
});

const JokeModel = mongoose.model("joke", JokeSchema);

module.exports = JokeModel;
