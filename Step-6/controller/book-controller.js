const book=require('../models/models')
const allBook = async (req, res) => {
    const allBooks =await book.find({})
    if (allBooks) {
        res.status(200).json({
            message: "the all books are :",
            data:allBooks
        })
    } else {
        res.status(404).json({message:"error"})
    }
};
const bookById = async (req, res) => {
    try {
        const currentBookId = req.params.id;
        const bookDetails=await book.findById(currentBookId)
        if (bookDetails) {
            res.status(200).json({message:"Book found",data:bookDetails})
        } else {
            res.status(404).json({message:"book not Found"})
        }
    } catch (err) {
        console.log("There are some Error",err)
    }
};
const addBook = async (req, res) => {
        try {
        const newBookFromData = req.body;
        const newBook = await book.create(newBookFromData);
        if (newBook) {
            res.status(200).json({message:"new book",data:newBook})
        } else {
            res.status(404).json({message:"Something Error"})
        }
    } catch (error) {
        console.log(error)
    }
}
const updateBook = async (req, res) => {
try {
    const currentBookId = req.params.id;
    const currentBookData=req.body
    const bookDetails = await book.findByIdAndUpdate(currentBookId,currentBookData,{new:true})
    if (bookDetails) {
        res.status(200).json({message:"updated Data",data:bookDetails})
    } else {
        res.status(404).json({message:"error"})
    }
} catch (error) {
    console.log(error)
}
};
const deleteBook = async (req, res) => {
   try {
       const idFound = req.params.id;

       const currentBook = await book.findByIdAndDelete(idFound)
       if (!currentBook) {
        return res.status(404).json({message:'book not found'})
       }
       res.status(200).json({message:"Delete this Book",data:currentBook})
   } catch (err) {
   res.status(500).json({
     message: "Server error",
     error: err.message
   });
}
};

module.exports={allBook,bookById,addBook,updateBook,deleteBook}