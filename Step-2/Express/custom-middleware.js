 const express = require('express');
 
const app = express();
 

const requestTimeStamLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString()   
    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next();
};

app.use(requestTimeStamLogger);
app.get('/', (req, res) => {
    res.send("Home Page")
});
app.get('/about', (req, res) => {
    res.send('About Page')
});

const port = 3000;
app.listen(port, () => {
    console.log(port);
})