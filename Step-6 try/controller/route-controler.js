const e = require("express");
const products=require("../modules/model")
const allProduct = async (req,res) => {
   try {
     const allProducts = await products.find({});
    if (allProducts) {
        res.status(200).json({message:"all Product are :",data:allProducts})
    } else {
        res.status(404).json({message:"not found anything"})
    }
   } catch (error) {
    console.log(error)
   }
};
const productById = async (req,res) => {
    try {
    const findProductById = req.params.id;
    const allProduct = await products.findById(findProductById)
    if (allProduct) {
        res.status(200).json({message:"Item has been founded",data:allProduct})
    } else {
         res.status(404).json({message:"Not added"})
    }
    } catch (error) {
        console.log(error)
    }
};
const addProduct = async (req,res) => {
    try {
        const reqProducts=req.body
        const addProduct = await products.create(reqProducts)
        if (addProduct) {
            res.status(200).json({message:"product added successfully",data:addProduct})
        } else {
            res.status(404).json({message:"Not added"})
        }
    } catch (error) {
        console.log(error)
    }
};
const UpdateProduct = async (req,res) => {
    try {
            const productById = req.params.id;
        const product = await products.findByIdAndUpdate(productById, req.body)
        if (product) {
            res.status(202).json({message:"product have been Updated",data:product})
        } else {
            res.status(404).json({message:"not found"})
        }
    } catch (error) {
        console.log(error)
    }
};
const deleteProduct = async (req,res) => {
    const productById = req.params.id;
    const product = await products.findByIdAndDelete(productById);
    if (product) {
        res.status(200).json({message:"The Prodcut Havd Been Deleted",data:product})
    } else {
        res.status(404).json({message:"not found"})
    }
};

module.exports={allProduct,productById,addProduct,UpdateProduct,deleteProduct}
