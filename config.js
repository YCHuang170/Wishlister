var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : process.env.host,
    user     : process.env.user,
    password : process.env.password,
    database : process.env.database,
    port     : process.env.port
});

module.exports = {
    mysql, connection
};
