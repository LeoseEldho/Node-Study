const e = require('express');
const expree = require('express');

const app = expree();

app.get('/', (req, res) => {
    res.send("hello");
});
app.get("/product", (req, res) => {
    const product = [
        {
            id: 1,
            product:"product-1"
        },
         {
            id: 2,
            product:"product-2"
        }, {
            id: 3,
            product:"product-3"
        },
    ]
    res.send(product)
})

app.get('/product/:id', (req, res) => {
    let productId = req.params.id;
        const product = [
        {
            id: 1,
            product:"product-1"
        },
         {
            id: 2,
            product:"product-2"
        }, {
            id: 3,
            product:"product-3"
        },
    ]
    const getProduct = product.find(data => data.id == productId)
    if (getProduct) {
        res.send(getProduct)
    } else {
        res.send("No Product!!!")
    }
})
const port = 3000;
app.listen(port, () => {
    console.log("Port:",port)
})