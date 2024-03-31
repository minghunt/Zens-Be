const mongoose = require("mongoose");
const mongoURI =
    "mongodb+srv://20521368:20521368@sneaker-be.iyg0yv2.mongodb.net/Sneaker-be?retryWrites=true&w=majority"; // Replace with your MongoDB URI
try {
    mongoose.connect(mongoURI);
    console.log("MongoDB Cloud connect successfully!");
} catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
}
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
