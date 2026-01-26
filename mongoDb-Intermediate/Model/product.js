const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    inStock: Boolean,
    tage:[String]
});

module.exports = mongoose.model('product',productSchema)