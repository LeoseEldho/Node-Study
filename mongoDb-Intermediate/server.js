const express = require("express");
const app = express();
const dataBase=require('./DataBase/Db')

app.use(express.json());


dataBase()
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server running ",PORT)
})