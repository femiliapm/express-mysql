const connection = require("../configs/database");
const {
  responseError,
  responseMessage,
  responseData,
} = require("../utils/response-handler");

exports.addBook = (sql, requestBody, response) => {
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

exports.getBooks = (sql, response) => {
  connection.query(sql, (err, result, fields) => {
    if (err) {
      return responseError(response, 500, "Something wrong in server!", err);
    }

    responseData(response, 200, result);
  });
};

exports.getBooksById = (sql, response, id) => {
  connection.query(sql, id, (err, result, fields) => {
    if (err) {
      return responseError(response, 500, "Something wrong in server!", err);
    }

    responseData(response, 200, result);
  });
};
