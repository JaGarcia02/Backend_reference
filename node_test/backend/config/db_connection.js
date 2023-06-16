const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "personal_schema",
});

connection.connect(function (err) {
  if (err) {
    console.log("Connection Error!");
  } else {
    console.log("Connection Established!");
  }
});

module.exports = connection;
