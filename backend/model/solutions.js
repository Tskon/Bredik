const mysql = require('mysql');
const serverCfg = require('../config/database');
const str = 'select * from `admins`';

const connection = mysql.createConnection({
  host: serverCfg.dbHost,
  user: serverCfg.dbUser,
  password: serverCfg.dbPass,
  database: serverCfg.dbName
});

connection.connect();

connection.query(str, (err, rows, fields) => {
  if (err) console.log(err);
  console.log(rows, fields);
});

connection.end();

// module.exports = solutions;