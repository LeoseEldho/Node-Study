const mongoose = require("mongoose");
require("dotenv").config();

const dataBase = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("DataBase Connected Successfully..")
    } catch (err) {
        console.log(err)
   }
};
module.exports = dataBase;