const mysql = require('mysql');
let pools = {};
let { db } = require('./configure.js');

let query = (
    sql,
    callback,
    host = db.host,
    port = db.port,
    user = db.user,
    password = db.pwd
) => {
    if (!pools.hasOwnProperty(host)) {
        pools[host] = mysql.createPool({
            host,
            port,
            user,
            password,
        });
    }
    pools[host].getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        // 执行 use koa;
        connection.query(`use ${db.name};`, (err, results) => {
            if (err) {
                return callback(err);
            }
            connection.query(sql, (err, results) => {
                callback(err, results);
                connection.release();
            });
        }); // koa: db name
    });
};

module.exports = {
    query,
};
