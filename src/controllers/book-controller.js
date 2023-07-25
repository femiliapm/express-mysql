const { bookModel } = require("../models");
const { responseError, responseData } = require("../utils/response-handler");

exports.createBook = async (req, res) => {
  try {
    const requestBody = { ...req.body };
    const result = await bookModel.addBook(requestBody);

    if (!result.affectedRows) {
      return responseError(res, 500, "Internal server error!", error);
    }

    let data = await bookModel.getBooksById(res, result.insertId);
    return responseData(res, 201, data);
  } catch (error) {
    return responseError(res, 500, "Internal server error!", error);
  }
};

exports.getBooks = async (req, res) => {
  try {
    let data = await bookModel.getBooks();
    return responseData(res, 200, data);
  } catch (error) {
    return responseError(res, 500, "Internal server error!", error);
  }
};

exports.getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    let data = bookModel.getBooksById(id);
    return responseData(res, 200, data);
  } catch (error) {
    return responseError(res, 500, "Internal server error!", error);
  }
};
