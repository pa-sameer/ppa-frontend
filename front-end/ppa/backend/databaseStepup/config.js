var mysql = require('mysql');
var Keys = require('./configKey');

var connection = mysql.createPool({
    connectionLimit: Keys.CONNECTIONLIMIT,
    host: Keys.HOST,
    user: Keys.USER,
    password: Keys.PASSWORD,
    database: Keys.DATABASE,
});

module.exports = connection;