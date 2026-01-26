const product = require("../Model/product");

const inStock = async (req, res) => {
  try {
    const productList = [
      {
        name: "laptop",
        category: "electronics",
        price: 50000,
        inStock: true,
        tage: ["computer", "tech"],
      },
      {
        name: "smartphone",
        category: "electronics",
        price: 5000,
        inStock: true,
        tage: ["smartphone", "tech"],
      },
      {
        name: "headphone",
        category: "electronics",
        price: 400,
        inStock: false,
        tage: ["audio", "tech"],
      },
      {
        name: "shoe",
        category: "sports",
        price: 200,
        inStock: true,
        tage: ["footware", "running"],
      },
      {
        name: "novel",
        category: "book",
        price: 50000,
        inStock: true,
        tage: ["bestselling", "story"],
      },
    ];
    const result = await product.insertMany(productList);
    res
      .status(202)
      .json({ message: `Product are inserted`, data: `${result.length}` });
  } catch (error) {
    console.log(error);
  }
};

const getProductState = async (req, res) => {
  try {
    const result = await product.aggregate([
      {
        $match: {
          inStock: true,
          price: {
            $gte: 350,
          },
        },
      },
      {
        $group: {
          _id: "$category",
          avgPrice: { $avg: "$price" },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res.status(200).json({ message: "Filtered Products", Data: result });
  } catch (e) {
    console.log(e);
  }
};

const getProductAnalizies = async (req, res) => {
  const result = await product.aggregate([
    {
      $match: {
        category: "electronics"
      }
    },
    {
      $group: {
        _id:null,
        avgPrice: {
          $avg:"$price"
        },
        totalRevenue: {
          $sum:"$price"
        },
        maxPrice: {
          $max:"$price"
        },
        minPrice: {
          $min:"$price"
        }
      }
    }
  ]);
  res.status(200).json({message:"listed products",data:result})
}
module.exports = { inStock, getProductState ,getProductAnalizies};
