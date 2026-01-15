const e = require('express');
const express = require('express');
const app = express();

app.use(express.json());

const book = [
    {
        id: 1,
        title:"book 1"
    },
    {
        id: 2,
        title:"book 2"
    },
    {
        id: 3,
        title:"book 3"
    }
];

app.get('/',(req, res)=> {
    res.json("Welcome to the Page:")
});
app.get('/get', (req, res) => {
    res.json(book);
});
app.get('/get/:id', (req, res) => {
    const getBook = book.find(item => item.id == req.params.id)
    if (!getBook) {
        res.json("not find")
    } else {
        res.json(getBook)
    }
})
app.post('/add', (req, res) => {
    const newBook = {
        id: book.length + 1,
        title: "book no" + book.length + 1
    };
    book.push(newBook);
    res.json(newBook);
});
app.put('/updata/:id', (req, res) => {
    const findBook = book.find(item => item.id == req.params.id)
    if (findBook) {
        findBook.title = req.body.title || findBook.title;
        res.status(200).json({ data: `update ${req.params.id}`, book: findBook },);
    } else {
        res.status(404).json({data:'not found ',message:"data not found"})
    }
})
app.delete('/delete/:id', (req, res) => {
    const current = book.find(item => item.id == req.params.id)
    if (current == -1) {
        res.status(404).json({message:"not found"})
    } else {
        book.splice(current, 1)
        res.status(200).json({message:"deleted ",data:book})
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(port)
})