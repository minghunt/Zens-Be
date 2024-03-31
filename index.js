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
  origin: ['http://localhost:3000', 'https://zens-fe.vercel.app,'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin','Access-Control-Allow-Headers'],
  credentials: true, // Allow credentials (cookies)
};
app.use((req, res, next) => {
  // Thiết lập header 'Access-Control-Allow-Origin' để cho phép truy cập từ mọi domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Thiết lập các header khác tùy thuộc vào yêu cầu của bạn
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Các phương thức HTTP được phép

  // Gọi next để chuyển điều khiển đến middleware tiếp theo
  next();
});
app.use(cors(corsOptions));
// Middleware

app.use(bodyParser.json());
app.use(cookieParser());
// Routes
app.use('/api/joke', JokeRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  