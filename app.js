var path = require('path');

var express = require('express');
var session = require('express-session');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var markdown = require('markdown-js');

var settings = require('./data/baseData/systemConfig.js');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
/*用来承接字符串或者是form表单提交*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());
/*静态资源变量*/
app.use(express.static(path.join(__dirname, 'public')));


/*Session默认存放在内存中*/
app.use(session({
    secret: settings.db_cookieSecret,
    key: settings.db_database,//cookie name
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
    resave: false,
    saveUninitialized: true
}));

var editpage = require('./routes/edit');
app.use('/', routes);
app.use('/edit', editpage);
app.use('/users', users);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
