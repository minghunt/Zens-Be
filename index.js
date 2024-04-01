const express = require("express");
const bodyParser = require("body-parser");
require("./config/db");
const cookieParser = require("cookie-parser");
const JokeRouter = require("./routers/JokeRouter");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.APP_PORT || 8080;

const corsOptions = {
    origin: ["http://localhost:3000", "https://zens-fe.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Origin",
    ],
    credentials: true, // Allow credentials (cookies)
};

app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
// Routes
app.use("/api", JokeRouter);

// Server information route
app.get("/", (req, res) => {
    const serverInfo = {
        name: "Nodejs Server",
        version: "1.0.0",
        toGetAllJoke: "Method: Get /api/jokes",
        toGetJoke: "Method: Get /api/joke",
        toVoteJoke:
            "Method: Post /api/joke/vote?id=<jokeId>&isfunny=<true/false>",
    };
    res.json(serverInfo);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
