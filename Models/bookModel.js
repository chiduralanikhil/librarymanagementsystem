const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    published_date: { type: String }
  });

const bookModel = mongoose.model('Books', bookSchema);
module.exports = bookModel