
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var book = new Schema({
  _id:              {type: String },
  title:            {type: String } ,
  subtitle:         {type: String },
  isbn13 :          {type: String },
  price :           {type: String },
  image :           {type: String },
  author :          {type: String },
  rating:           {type: String },
  raters :          {type: String }
});


module.exports = mongoose.model('book', book);