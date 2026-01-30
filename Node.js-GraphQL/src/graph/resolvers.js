const products = require("../data/products");

const resolve = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((item) => item.id == id),
  },
  Mutation: {
    createProduct: (_, { id, category, title, price, inStock }) => {
      const newProduct = {
        id: products.length + 1,
        category,
        title,
        price,
        inStock,
      };
      products.push(newProduct);
      return newProduct;
    },
    deleteProduct: (_, { id }) => {
      const index = products.findIndex((product) => product.id == id);
      if (index == -1) {
        return false;
      }
      products.splice(index, 1);
      return true;
    },
    updataProduct: (_, { id, ...update }) => {
      const index = products.findIndex((product) => product.id == id);
      if (index == -1) return false;
      updateData = {
        ...products[index],
        ...update,
        };
        products[index]=updateData

      return updateData;
    },
  },
};

module.exports = resolve;
