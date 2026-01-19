const mongoose = require('mongoose');

const dataConnection = async  () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Server connected Successfully")
    } catch (err) {
        console.log(err)
    }
};
module.exports=dataConnection