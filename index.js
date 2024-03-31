const express = require('express');
const bodyParser = require('body-parser');
require('./config/db');
const cookieParser = require('cookie-parser');
const JokeRouter = require('./routers/JokeRouter');
require('dotenv').config()
const cors=require('cors')
const app = express();
const PORT = process.env.APP_PORT || 8080;


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Access-Control-Allow-Origin');
  next();
});

app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
// Routes
app.use('/api/joke', JokeRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  