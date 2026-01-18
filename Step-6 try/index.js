require('dotenv').config();
const dataConnection = require("./database/db");
const express = require("express")
const route=require('./router/route')

const app = express();
dataConnection()
app.use(express.json())
app.use("/",route)


const PORT=process.env.PORT||300
app.listen(PORT, () => {
    console.log(PORT)
})
