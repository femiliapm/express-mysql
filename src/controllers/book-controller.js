const { bookModel } = require("../models");

exports.createBook = (req, res) => {
  const requestBody = { ...req.body };

  bookModel.addBook(requestBody, res);
};

exports.getBooks = (req, res) => {
  bookModel.getBooks(res);
};

exports.getBookById = (req, res) => {
  const id = req.params.id;

  bookModel.getBooksById(res, id);
};
