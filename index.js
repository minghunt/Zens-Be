const express = require('express');
const bodyParser = require('body-parser');
require('./config/db');
const cookieParser = require('cookie-parser');
const JokeRouter = require('./routers/JokeRouter');
require('dotenv').config()
const cors=require('cors')
const app = express();
const PORT = process.env.APP_PORT || 8080;

const corsOptions = {
  origin: ['http://localhost:3000', 'https://zens-fe.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow credentials (cookies)
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
// Routes
app.use('/api/joke', JokeRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  