const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: [true, "Should Required"],
    trim: true,
    maxLength: [100, "The maximum Length is 100"],
  },
  author: {
    type: "string",
    required: [true, "Should Required"],
    trim: true,
  },
  title: {
    type: "string",
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