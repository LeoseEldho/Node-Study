const mongoose = require('mongoose');

const mongooseDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://leoseyacobeldho0017_db_user:leoseeldho2026@cluster1.0r7unoq.mongodb.net/');
        console.log("Server Now Connected Successfully");
    } catch(e) {
        console.log("There is an Erro",e)
    }
};
module.exports=mongooseDb