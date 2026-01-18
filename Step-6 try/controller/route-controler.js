const products=require("../modules/model")
const allProduct = async () => {
    
};
const productById = async () => {
    
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
const UpdateProduct = async () => {
    
};
const deleteProduct = async () => {
    
};

module.exports={allProduct,productById,addProduct,UpdateProduct,deleteProduct}
