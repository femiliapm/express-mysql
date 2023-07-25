const connection = require("../configs/database");

exports.addBook = (requestBody) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO books SET ?";
    // execute query
    connection.query(sql, requestBody, (err, result, fields) => {
      // handling error
      if (err) {
        console.log(err);
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.getBooks = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM books`;
    connection.query(sql, (err, result, fields) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.getBooksById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM books WHERE id = ?`;
    connection.query(sql, id, (err, result, fields) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};
