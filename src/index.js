const express = require('express');

const connectDB = require('./configs/db');
const authRouter = require('./controllers/auth.controllers');
const postRouter = require('./controllers/post.controllers');

const app = express();
const PORT = 8000;

require('dotenv').config();

app.use(express.json());

app.use('/users', authRouter);
app.use('/posts', postRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});