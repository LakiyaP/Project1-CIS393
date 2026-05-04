const pool = mysql.createPool({
   host: "localhost",
   user: "root",
   password: "",   // 👈 if you have a password, put it here
   database: "opstrack_db"
});
