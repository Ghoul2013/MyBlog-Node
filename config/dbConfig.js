/**
 *
 * Created by ljz-vt on 2016/3/29.
 */
var sys = require('../data/baseData/systemConfig.js');

module.exports = {
    user: sys.db_user,
    password: sys.db_pwd,
    host: sys.db_host,
    port: sys.db_port,
    database: sys.db_database
}