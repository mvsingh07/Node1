

const mysql = require("mysql");

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_backend'
});


dbConn.connect();

module.exports=dbConn;
