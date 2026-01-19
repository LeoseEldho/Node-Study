require('dotenv').config();
const express = require("express");
const app = express();
const dataBase = require('./database/db')

const PORT = process.env.PORT || 3000;

dataBase()

app.listen(PORT, () => {
    console.log(PORT)
})