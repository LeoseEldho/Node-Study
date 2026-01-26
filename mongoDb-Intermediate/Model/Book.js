const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"author"
    }
});

module.exports=mongoose.model('book',bookSchema)