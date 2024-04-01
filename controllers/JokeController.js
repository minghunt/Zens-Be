const JokeService = require("../services/JokeService");

const JokeController = {
    async getAllJokes(req, res) {
        try {
            const jokes = (await JokeService.getAllJoke())

            res.json({ message: "Joke got successfully!", jokes: jokes });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getJoke(req, res) {
        try {
            const votedJokes = req.cookies.votedJokes || [];
            const joke = (await JokeService.getJoke(votedJokes)) || {
                message: "Come back another day!",
            };

            res.json({ message: "Joke got successfully!", joke: joke });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async voteJokeById(req, res) {
        try {
            const votedJokes = req.cookies.votedJokes || [];
            const jokeId = req.query.id;
            
            if (votedJokes.includes(jokeId))
                return res.status(204).json({ message: "Joke voted!" });

            const isFunny = req.query.isfunny === "true" || false;
            
            const joke = await JokeService.voteJokeById(jokeId, isFunny);
            if (!joke) {
                return res.status(404).json({ message: "Joke not found" });
            }

            votedJokes.push(joke._id);

            res.cookie("votedJokes", votedJokes, {
                maxAge: 1000*60*60*24,
                httpOnly: true,
                secure: true,
                sameSite:'none'
            });
            
            res.json({ joke });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = JokeController;
