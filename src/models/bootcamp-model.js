const connection = require("../configs/database");
const {
  responseMessage,
  responseError,
  responseData,
} = require("../utils/response-handler");

exports.insertBootcamp = (res, requestBody) => {
  const query = "INSERT INTO bootcamp SET ?";
  // execute query
  connection.query(query, requestBody, (err, result, fields) => {
    // handling err
    if (err) {
      return responseError(res, 500, "Failed insert data!", err);
    }

    // success request
    responseMessage(res, 201, "Success insert data!", true);
  });
};

exports.getBootcamps = (res) => {
  const query = "SELECT * FROM bootcamp";
  // execute query
  connection.query(query, (err, results, fields) => {
    // handling error
    if (err) {
      return responseError(res, 500, "Something wrong in server!", err);
    }

    // success request
    responseData(res, 200, results);
  });
};

exports.getBootcampById = (id, res) => {
  const querySearch = "SELECT * FROM bootcamp WHERE id = ?";
  // execute find data query
  connection.query(querySearch, id, (err, result, fields) => {
    // handling error
    if (err) {
      return responseError(res, 500, "Something wrong in server!", err);
    }

    // data find
    if (result.length) {
      // success find
      responseData(res, 200, result);
    } else {
      return responseMessage(res, 404, "Data not found!", false);
    }
  });
};

exports.updateBootcamp = (id, res, requestBody) => {
  const querySearch = "SELECT * FROM bootcamp WHERE id = ?";
  const queryUpdate = "UPDATE bootcamp SET ? WHERE id = ?";
  // execute query find data
  connection.query(querySearch, id, (err, results, fields) => {
    // handling err
    if (err) {
      return responseError(res, 500, "Something wrong in server!", err);
    }

    // data finded
    if (results.length) {
      // execute query update
      connection.query(
        queryUpdate,
        [requestBody, id],
        (err, results, fields) => {
          // handling err
          if (err) {
            return responseError(res, 500, "Something wrong in server!", err);
          }

          // success update
          responseMessage(res, 200, "Success update data!", true);
        }
      );
    } else {
      return responseMessage(res, 404, "Data not found!", false);
    }
  });
};

exports.deleteBootcamp = (id, res) => {
  const querySearch = "SELECT * FROM bootcamp WHERE id = ?";
  const queryDelete = "DELETE FROM bootcamp WHERE id = ?";
  // execute query find data
  connection.query(querySearch, id, (err, result, fields) => {
    // handling err
    if (err) {
      return responseError(res, 500, "Something wrong in server!", err);
    }

    // data finded
    if (result.length) {
      // execute query delete
      connection.query(queryDelete, id, (err, result, fields) => {
        // handling err
        if (err) {
          return responseError(res, 500, "Something wrong in server!", err);
        }

        // success deleted
        responseMessage(res, 200, "Success deleted data!", true);
      });
    } else {
      return responseMessage(res, 404, "Data not found!", false);
    }
  });
};
