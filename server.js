const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const connectDB = require('./connectDB');

const app = express();
dotenv.config();
app.use(bodyParser.json());
connectDB();


app.get("/",(req,res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
