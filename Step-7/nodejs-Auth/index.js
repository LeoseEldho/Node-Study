require('dotenv').config();
const express = require("express");
const app = express();
const dataBase = require('./database/db')
const router = require('./Router/route');
const UserPage=require('./Router/home')
const AdminPage=require('./Router/adminRoute')
dataBase()

app.use(express.json())
app.use('/', router)
app.use("/",UserPage)
app.use("/",AdminPage)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(PORT)
});