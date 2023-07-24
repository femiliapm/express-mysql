const connection = require("../configs/database");
const {
  responseError,
  responseMessage,
  responseData,
} = require("../utils/response-handler");

exports.addBook = (requestBody, response) => {
  const sql = "INSERT INTO books SET ?";
  // execute query
  connection.query(sql, requestBody, (err, result, fields) => {
    // handling error
    if (err) {
      return responseError(response, 500, "Something wrong in server!", err);
    }

    // succeed
    responseMessage(response, 201, "Successfully added book!", true);
  });
};

exports.getBooks = (response) => {
  const sql = `SELECT * FROM books`;
  connection.query(sql, (err, result, fields) => {
    if (err) {
      return responseError(response, 500, "Something wrong in server!", err);
    }

    responseData(response, 200, result);
  });
};

exports.getBooksById = (response, id) => {
  const sql = `SELECT * FROM books WHERE id = ?`;
  connection.query(sql, id, (err, result, fields) => {
    if (err) {
      return responseError(response, 500, "Something wrong in server!", err);
    }

    responseData(response, 200, result);
  });
};
