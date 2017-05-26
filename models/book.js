// We'll create a schema and model for books in this file!
// Our books will have the following attributes:
//title
//author
//image (use a string for this)
//releaseDate

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    image: String,
    releaseDate: String
});


// Create the Book model from the schema.
let Book = mongoose.model('Book', BookSchema);

// Export Book from this module(= this file).
module.exports = Book;