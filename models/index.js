var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// my code here.
module.exports.Book = require('./book.js');
module.exports.Author = require('./author.js');
