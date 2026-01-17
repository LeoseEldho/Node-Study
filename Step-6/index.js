require('dotenv').config();
const express = require('express');
const mongooseDb = require('./database/db');
const bookRoutes=require('./routes/book-route')

const app = express();
const PORT = process.env.PORT || 3000;

//connect DataBase;
mongooseDb();

app.use(express.json());
app.use('/api/book',bookRoutes)

app.listen(PORT, () => {
    console.log("Server Connected", PORT);
});