const mongoose = require("mongoose");

const products = mongoose.Schema({
    name:{
        type: String,
        require:[true]
    },
    year: {
        type: Date,
        require:true
    },
    productDetails:{
        type: String,
        require:true
    }
});

module.exports=mongoose.model("products",products)