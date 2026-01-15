const express = require('express');
const app = express();

const myMiddleware = (req, res, next)=>{
    console.log("start middleware");
    next()
};
app.use(myMiddleware);

app.get('/', (req, res) => {
    res.send("Home Page")
});
app.get('/about', (req, res) => {
    res.send('About Page')
});

const port = 3000;
app.listen(port, () => {
    console.log(port);
});