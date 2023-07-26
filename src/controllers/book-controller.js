const { bookModel } = require("../models");
const { responseError, responseData } = require("../utils/response-handler");

exports.createBook = async (req, res) => {
  try {
    const { title, author, publisher } = { ...req.body };
    if (
      title === undefined ||
      author === undefined ||
      publisher === undefined
    ) {
      return responseError(res, 400, "Bad request!");
    }
    const requestBody = {
      title,
      author,
      publisher,
    };
    const result = await bookModel.addBook(requestBody);

    if (!result.affectedRows) {
      return responseError(res, 500, "Internal server error!", error);
    }

    let data = await bookModel.getBooksById(result.insertId);
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
    if (id === undefined) {
      return responseError(res, 400, "Bad request!");
    }
    let data = bookModel.getBooksById(id);
    return responseData(res, 200, data);
  } catch (error) {
    return responseError(res, 500, "Internal server error!", error);
  }
};
