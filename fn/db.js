/**
 * Created by tutrinh on 5/11/18.
 */

var mysql = require('mysql');

exports.load = sql => {
    return new Promise((resolve, reject) => {
            var cn = mysql.createConnection({
                host: '127.0.0.1',
                port: 3306,
                user: 'root',
                password: 'tutrinhtt',
                database: 'doanwebck5',
            });

    cn.connect();

    cn.query(sql, function(error, rows, fields) {
        if (error) {
            reject(error);
        } else {
            resolve(rows);
        }

        cn.end();
    });
});
}

exports.save = sql => {
    return new Promise((resolve, reject) => {
            var cn = mysql.createConnection({
                host: '127.0.0.1',
                port: 3306,
                user: 'root',
                password: 'tutrinhtt',
                database: 'doanwebck5',
            });

    cn.connect();

    cn.query(sql, function(error, value) {
        if (error) {
            reject(error);
        } else {
            resolve(value);
        }

        cn.end();
    });
});
}