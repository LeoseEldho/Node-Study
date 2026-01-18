const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Should Required"],
    trim: true,
    maxLength: [100, "The maximum Length is 100"],
  },
  author: {
    type: String,
    required: [true, "Should Required"],
    trim: true,
  },
  year: {
    type: String,
    required: [true, "Should Required"],
      min: [1000, 'Year'],
    max:[new Date().getFullYear(),"Year not in Future"]
    },
    created: {
        type: Date,
        default:Date.now
  }
});

module.exports=mongoose.model('Book',bookSchema)