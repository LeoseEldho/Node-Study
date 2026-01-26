const express = require("express");
const app = express();
const dataBase=require('./DataBase/Db')
const productRoute=require('./Product-Root/route')
const bookRouter=require('./Product-Root/book-Route')

app.use(express.json());


dataBase()
app.use('/', productRoute)
app.use('/book',bookRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server running ",PORT)
})