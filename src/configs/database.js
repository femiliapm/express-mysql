const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "s3cur1tyr00t",
  database: "db_latihan_nodejs",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = connection;
