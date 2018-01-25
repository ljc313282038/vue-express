// 引入Express
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
var mysql = require('mysql');
const moment = require('moment');
var MySQLStore = require('express-mysql-session')(session);
var db = require('./db.js');
const app = express();
app.use(cookieParser());
/**
 * 将session数据
 * @type {String}
 */
// app.use(session({
//     secret: '12345',
//     name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
//     cookie: {maxAge: 1000 * 60 * 60 * 24 * 30 },  //设置maxAge是30天，即80s后session和相应的cookie失效过期
//     resave: false,
//     saveUninitialized: true,
//     secret: 'session_cookie_secret',  
//     store: new SessionStore(options)  
// }));

/**
 * 将session数据存储到mysql
 * @type {String}
 */
var options = {  
    host: 'localhost',  
    port: 3306,  
    user: 'root',  
    password: '',  
    database: 'article'  
} 
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: new MySQLStore(options),
	resave: false,
	saveUninitialized: true,
	cookie:{
        maxAge:1000*60*60*24
    }
}));


// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
//处理文件过大
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
//消除异步模块
const co = require('co');

// 引入编写好的api
const api = require('./api'); 

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(api);
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, 'publice')));


// 因为是单页应用 所有请求都走/dist/index.html
app.get('/', function(req, res,next) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    res.send(html);
    next();
});

// 监听8088端口
app.listen(8082);
console.log('success listen…………');