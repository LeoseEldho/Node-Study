const mongoose=require('mongoose')

async function serverConnection() {
    try {
        const data = mongoose.connect(process.env.MONGO_URL)
        if (!data) {
            console.log("Somthing Went Wrong!!!")
        }
        console.log("Server Connected Successfully")
    } catch (err) {
        console.log(err)
    }
}

module.exports=serverConnection