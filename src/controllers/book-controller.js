const { bookModel } = require("../models");

exports.createBook = (req, res) => {
  const requestBody = { ...req.body };
  const sql = "INSERT INTO books SET ?";

  bookModel.addBook(sql, requestBody, res);
};

exports.getBooks = (req, res) => {
  const sql = `SELECT * FROM books`;

  bookModel.getBooks(sql, res);
};

exports.getBookById = (req, res) => {
  const sql = `SELECT * FROM books WHERE id = ?`;
  const id = req.params.id;

  bookModel.getBooksById(sql, res, id);
};
