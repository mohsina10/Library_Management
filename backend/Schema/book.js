const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newExercise = new Schema({
  bookname: { type: String },
  author: { type: String },
  date: { type: String },
}); 
module.exports =mongoose.model("book", newExercise);