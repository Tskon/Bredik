const mysql = require('mysql');
const serverCfg = require('../config/database');


module.exports = new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
        host: serverCfg.dbHost,
        user: serverCfg.dbUser,
        password: serverCfg.dbPass,
        database: serverCfg.dbName
    });

    connection.connect();

    const str = "SELECT * FROM `solutions`";

    connection.query(str, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
    });

    connection.end();
});


