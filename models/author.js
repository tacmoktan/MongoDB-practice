const mongoose = require('mongoose');   //loads mongoose
const { Schema } = mongoose;            //destructuring

//create schema for Book and Author
const BookSchema = new Schema({
    title:String,
    price:Number
});

const AuthorSchema = new Schema({
    name:String,
    age:Number,
    books:[BookSchema]              //nesting sub-document within Author
})

//create Model
const Author = mongoose.model('author', AuthorSchema );

module.exports = Author;