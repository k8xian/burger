const mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error coneccting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;