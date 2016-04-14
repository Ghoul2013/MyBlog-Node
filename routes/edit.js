/**
 * Description:
 * Company:
 * Version:
 * Created by ljz on 2016/4/14.
 */
var express = require('express');
var router = express.Router();
var dao = require('../config/db.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('edit', {title: 'Express'});
});

module.exports = router;