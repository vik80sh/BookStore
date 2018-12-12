const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cartBook = new Schema({
  id:              {type: String },
  email:            {type:String , require:true},
  title:            {type: String },
  subtitle:         {type: String },
  isbn13 :          {type: String },
  price :           {type: String },
  image :           {type: String },
  author :          {type: String },
  rating:           {type: String },
  raters :          {type: String },
  numberOfItem :    {type:Number , default:1}
});


module.exports = mongoose.model('cartBook', cartBook);