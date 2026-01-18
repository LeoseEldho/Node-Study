const mongoose = require('mongoose');

const Data=mongoose.connect("mongodb+srv://leoseyacobeldho0017_db_user:leoseeldho2026@cluster2.auheenn.mongodb.net/");

const dataConnection = async () => {
    try {
        await Data
        if (Data) {
            console.log("Data connected successfully")
        }
    } catch (error) {
        console.log(error)
    }
};

module.exports=dataConnection