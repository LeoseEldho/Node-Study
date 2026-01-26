const author = require("../Model/Auther");
const book = require("../Model/Book");

const createAuther = async (req, res) => {
  try {
    const newAuthor = new author(req.body);
    if (!newAuthor) {
     return res.status(404).json({ message: "Something went wrong!" });
    }
    await newAuthor.save();
    res.status(202).json({ message: "Added new Author", data: newAuthor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = new book(req.body);
    if (!newBook) {
     return res.status(404).json({ message: "Something went wrong!" });
    }
    await newBook.save();
    res.status(202).json({ message: "Added new Book", data: newBook });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const bookWithAuthor = async (req, res) => {
  try {
    const bookAuthor = await book.findById(req.params.id).populate("author");
    if (!bookAuthor) {
      return res.status(404).json({ message: "something went wrong " });
    }
    res.status(202).json({ message: "book with author", data: bookAuthor });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createAuther, createBook, bookWithAuthor };
