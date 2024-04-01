const JokeModel = require("../models/JokeModel");

const JokeService = {
    async getAllJoke() {
        try {
            const jokes = await JokeModel.find();
            return jokes;
        } catch (error) {
            throw new Error(`Error getting joke: ${error.message}`);
        }
    },
    async getJoke(votedJokes) {
        try {
            const joke = await JokeModel.findOne({ _id: { $nin: votedJokes } });
            return joke;
        } catch (error) {
            throw new Error(`Error getting joke: ${error.message}`);
        }
    },
    async voteJokeById(jokeId, isFunny) {
        try {
            const updateField = isFunny ? "funCount" : "notFunCount";
            const updatedJoke = await JokeModel.findByIdAndUpdate(jokeId, {
                $inc: { [updateField]: 1 },
            }, { new: true });

            return updatedJoke;
        } catch (error) {
            throw new Error(`Error voting joke: ${error.message}`);
        }
    },

};

module.exports = JokeService;
