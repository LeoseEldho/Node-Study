const book=require('../models/models')
const allBook = async (req, res) => {
    try {
        const newBookFromData = req.body;
        const newBook = await book.create(newBookFromData);
        if (newBookFromData) {
            res.status(200).json({message:"new book",data:newBook})
        } else {
            res.status(404).json({message:"Something Error"})
        }
    } catch (error) {
        console.log(error)
    }
};
const bookById = async (req, res) => {
    
};
const addBook = async (req, res) => {
    
}
const updateBook = async (req, res) => {
    
};
const deleteBook = async (req, res) => {
    
};

module.exports={allBook,bookById,addBook,updateBook,deleteBook}