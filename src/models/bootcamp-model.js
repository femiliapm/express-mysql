const connection = require("../configs/database");
const {
  responseMessage,
  responseError,
  responseData,
} = require("../utils/response-handler");

exports.insertBootcamp = (res, sql, requestBody) => {
  // execute query
  connection.query(sql, requestBody, (err, result, fields) => {
    // handling err
    if (err) {
      return responseError(res, 500, "Failed insert data!", err);
    }

    // success request
    responseMessage(res, 201, "Success insert data!", true);
  });
};

exports.getBootcamps = (sql, res) => {
  // execute query
  connection.query(sql, (err, results, fields) => {
    // handling error
    if (err) {
      return responseError(res, 500, "Something wrong in server!", err);
    }

    // success request
    responseData(res, 200, results);
  });
};

exports.getBootcampById = (sql, id, res) => {
  // execute find data query
  connection.query(sql, id, (err, result, fields) => {
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

exports.updateBootcamp = (sqlSearch, id, res, sqlUpdate, requestBody) => {
  // execute query find data
  connection.query(sqlSearch, id, (err, results, fields) => {
    // handling err
    if (err) {
      return responseError(res, 500, "Something wrong in server!", err);
    }

    // data finded
    if (results.length) {
      // execute query update
      connection.query(sqlUpdate, [requestBody, id], (err, results, fields) => {
        // handling err
        if (err) {
          return responseError(res, 500, "Something wrong in server!", err);
        }

        // success update
        responseMessage(res, 200, "Success update data!", true);
      });
    } else {
      return responseMessage(res, 404, "Data not found!", false);
    }
  });
};

exports.deleteBootcamp = (sqlSearch, id, res, sqlDelete) => {
  // execute query find data
  connection.query(sqlSearch, id, (err, result, fields) => {
    // handling err
    if (err) {
      return responseError(res, 500, "Something wrong in server!", err);
    }

    // data finded
    if (result.length) {
      // execute query delete
      connection.query(sqlDelete, id, (err, result, fields) => {
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
