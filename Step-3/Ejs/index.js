const express = require('express');
const path = require('path');


const app = express();
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

const product = [
    {
        id: 1,
        
        name:'product- 1'
    },
        {
        id: 2,
        name:'product- 2'
    },
    {
        id: 3,
        name:'product- 3'
    }
];
app.get('/', (req, res) => {
    res.render('home',{title:'home',product:product})
});
app.get('/about', (req, res) => {
    res.render('about',{title:"about"})
});

const port = 3000;
app.listen(port, () => {
    console.log(port)
})