const mogoose = require('mongoose');

const productSchema = new mogoose.Schema({
    title: {
        type:String,required:true
    },
    catagory: {
        type:String,required:true
    },
    price: {
        type:Number,required:true
    },
    inStock: {
        type:Boolean,required:true
    }
});

module.exports=mogoose.model("product",productSchema)