const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const connectDB = require('./connectDB');
const bookModel = require("./Models/bookModel")

const app = express();
dotenv.config();
app.use(bodyParser.json());
connectDB();

app.post('/api/books', async (req, res) => {
  const { bookId, title, author, published_date } = req.body;
  console.log(req.body)
  if (!bookId || !title || !author) {
    res.status(400).json({ error: 'Title and Author are required' });
    return;
  }

  try {
    const existingBook = await bookModel.findOne({ title });
    if (existingBook) {
      res.status(400).json({ error: 'Book already exists' });
      return;
    }
    const newBook = await bookModel.create({
      bookId,
      title,
      author,
      published_date
    })
    res.status(201).json({ message: 'Book added successfully' , newBook });
  } catch (err) {
    console.error('Error adding new book:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/books', async (req, res) => {
  try {
    const books = await bookModel.find();
    res.json(books);
  } catch (err) {
    console.error('Error retrieving books:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.put('/api/books/:id', async (req, res) => {
  const bookId = req.params.id;
  console.log(bookId)
  const {title, author, published_date } = req.body;
  try {
    const Id = await bookModel.findOne({bookId})
    if(!Id) {
      res.status(404).json({error : "Book with entered id not found"})
      return;
    }
    console.log(Id._id)
    const updatedBook = await bookModel.findByIdAndUpdate(Id._id, { title, author, published_date }, { new: true });
    if (!updatedBook) {
      res.status(404).json({ error: 'Book not found'});
      return;
    }
    res.json({ message: 'Book updated successfully' });
  } catch (err) {
    console.error('Error updating book details:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/",(req,res) => {
  res.sendFile(__dirname + '/index.html');
})


app.listen(process.env.PORT, () => {
  try{
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
  }
  catch(error){
     console.log(error)   //handling error for running servr=er
  }
});
