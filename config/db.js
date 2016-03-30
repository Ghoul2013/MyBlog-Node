/**
 * Pool
 * Created by ljz-vt on 2016/3/29.
 */

var dbConfig = require('../config/dbConfig.js'),
    mysql = require('mysql'),
    pool = mysql.createPool(dbConfig);


exports.getConn = function (next) {
    pool.getConnection(function (err, conn) {

    })
}

