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
    }
    },
  // deleteProduct: async (_,  {id} ) => {
  //   const deleteproduct = await product.findByIdAndDelete(id)
  //   if (!deleteproduct)return false
  //   return deleteproduct
  //   }
    updataProduct:async (_, arg) => {
      const index =await product.findIndex((product) => product.id == id);
      if (index == -1) return false;
      updateData = {
        ...products[index],
        ...update,
        };
        products[index]=updateData

      return updateData;
    },

  }


module.exports = resolve;
