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
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from your frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow the HTTP methods specified
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'); // Allow the headers specified
  res.setHeader('Access-Control-Allow-Credentials', true); // Allow cookies to be sent with the requests

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
      res.sendStatus(200);
  } else {
      next();
  }
});
// Middleware

app.use(bodyParser.json());
app.use(cookieParser());
// Routes
app.use('/api/joke', JokeRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  