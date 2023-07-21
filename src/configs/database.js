const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOSTDB,
  port: process.env.PORTDB || 3306,
  user: process.env.USERDB,
  password: process.env.PASSDB,
  database: process.env.DBNAME,
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = connection;
