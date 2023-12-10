const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookId: {type: Number, required : true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    published_date: { type: String }
  });

const bookModel = mongoose.model('Books', bookSchema);
module.exports = bookModel