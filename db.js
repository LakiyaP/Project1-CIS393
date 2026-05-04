const mysql = require("mysql2");

const pool = mysql.createPool({
   host: "localhost",
   user: "root",
   password: "",
   database: "opstrack_db",
   waitForConnections: true,
   connectionLimit: 10
});

module.exports = pool.promise();
