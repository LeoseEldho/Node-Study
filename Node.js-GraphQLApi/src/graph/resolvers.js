const product=require('../Models/product')

const resolve = {
  Query: {
    products: async () => await product.find({}),
    product:async (_,{id})=>await product.findById(id)
  },

  Mutation: {
    createProduct: async (_, arg) => {
      const newProducts = new product(
        arg
      )
     return await newProducts.save()
    },
      updateProduct: async (_, { id ,...update}) => {
    return await product.findByIdAndUpdate(id,update,{new:true})
   
    },
      
        deleteProduct: async (_,  {id} ) => {
    return await product.findByIdAndDelete(id)
    }
    }
  }


module.exports = resolve;
