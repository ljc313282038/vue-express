// 引入Express
const express = require('express');
const app = express();
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
//处理时间模块
const moment = require('moment');
const router = express.Router();
const formidable = require('formidable');
var h2m = require('h2m')


//模拟文章
var content = {
    users: [ //用户表
        {
            userName: '@张三',
            passWord: '12345',
            // userAvatar:'15828041.jpg',

        },
        {
            userName: '@张四',
            passWord: '12345',
            // userAvatar:"require('./assets/images/15828041.jpg')",

        }
    ],

    latest: [{
            latestTit: '从招式与内功谈起——设计模式概述1',
            latestId: 1,
        },
        {
            latestTit: '从招式与内功谈起——设计模式概述1',
            latestId: 1,
        },
        {
            latestTit: '从招式与内功谈起——设计模式概述1',
            latestId: 1,
        },
        {
            latestTit: '从招式与内功谈起——设计模式概述1',

            latestId: 1,
        },
        {
            latestTit: '从招式与内功谈起——设计模式概述1',
            latestId: 1,
        },
        {
            latestTit: '从招式与内功谈起——设计模式概述1',
            latestId: 1,
        },
        {
            latestTit: '从招式与内功谈起——设计模式概述1',
            latestId: 1,
        },
        {
            latestTit: '从招式与内功谈起——设计模式概述2',
            latestId: 2,
        }
    ]
};

//数据库连接
var db = require('./db.js');

router.post('/api/login/content', (req, res) => {
    //拿到前端发过来的评论
    var textContent = req.body.content;
    //用于分辨那篇文章并且为他添加评论
    var mydataId = req.body.dataId;
    var author_pl = req.session.login;
    var sql = "INSERT INTO articlelist_pl (`articlelist_id`,`author_pl`,`content_pl`)VALUES ( '" + mydataId + "', '" + author_pl + "', '" + textContent + "');"
    db.query(sql, function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("ok");
        response = { pl: textContent };
        res.end(JSON.stringify(response));
    });

});
//拿到前端发过来的文章信息
router.post('/api/upData/article', (req, res) => {
    //拿到前端发过来的评论
    var article = req.body;
    var author = req.session.login;
    var updataType = article.updataType;
    var time = moment().format("YYYY-MM-DD", timezone = "GMT+8"); //拿到时间
    var sql;
    if (updataType == 'write') {
        sql = "INSERT INTO articlelist (`title`,`author`,`time`,`content`,`type`) VALUES('" + article.title + "','" + author + "','" + time + "','" + article.content + "','" + article.type + "');"
    } else if (updataType == 'updata') {
        sql = "UPDATE articlelist SET" + " content =" + "'" + article.content + "'" + "," + " title =" + "'" + article.title + "'" + "," + "type=" + "'" + article.type + "'" + "WHERE id =" + "'" + article.id + "'"
    }
    db.query(sql, function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
        response = "发布成功";
        res.end(JSON.stringify(response));
    });
});

//给子页面发送评论pageContent
router.get('/api/login/pageContent', (req, res) => {
    // 输出 JSON 格式
    var mydataId = req.query.dataId;
    var sql = 'SELECT * FROM `articlelist_pl` WHERE articlelist_id=' + '\"' + mydataId + '\"';

    db.query(sql, function(err, rows, fields) {
        if (err) {
            console.log(err);
        }
        response = rows;
        res.end(JSON.stringify(response));
       
    });
});

//找到要修改的文章返回给页面
router.get('/api/login/updata', (req, res) => {
    // 输出 JSON 格式
    var upDataId = req.query.updataId;
    var sql = 'SELECT * FROM `articlelist` WHERE id=' + '\"' + upDataId + '\"';
    db.query(sql, function(err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        response = rows;
        var md = h2m(rows[0].content); //使用2m模块将html转为mkdom
        rows[0].content = md;
        res.end(JSON.stringify(response));
        // console.log(response);
    });
});

//给首页发送文章列表
router.get('/api/login', (req, res) => {
    // 输出 JSON 格式
    var params = req.query;
    var sql = 'SELECT * FROM `articlelist` WHERE TYPE=' + '\"' + params.rot + '\"';
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return;
        }
        response = rows;
        res.end(JSON.stringify(response));
    });
});

//给文章管理页面发送文章
router.get('/api/glarticles', (req, res) => {
    // 输出 JSON 格式
    var params = req.query.author;
    var sql = 'SELECT * FROM `articlelist` WHERE author=' + '\"' + params + '\"';
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return;
        }
        response = rows;
        res.end(JSON.stringify(response));
    });
});

//登录api
router.post('/api/login/onlogin', (req, res) => {
    // 拿到前端发过来的用户和密码
    var userData_1 = req.body;
    //在用户中查找与请求相同的返回--登录成功
    var userData_2 = content.users.filter(function(item) {
        return item.userName == userData_1.userName && item.passWord == userData_1.passWord;
    });
    if (userData_2) {
        req.session.login = userData_2[0].userName; //每一次访问时，session对象的lastPage会自动的保存或更新内存中的session中去。         
    }
    response = req.session.login;
    res.end(response);
});

//判断是否登录
router.get('/api/beforlogin', (req, res) => {

    if (req.session.login) {
        response = req.session.login;
        res.end(response);
    } else {
        res.end();
    }
});

router.get('/api/login/latest', (req, res) => {
    var params = req.query;
    var contentLatest = content.latest.filter(function(item) {
        return item.latestId == params.val;
    });
    response = { contentLatest: contentLatest };
    res.end(JSON.stringify(response));
});

//接收图片
router.post('/api/login/upImg', (req, res) => {

    var img = req.body.img.miniurl;
    var base64Data = img.replace(/^data:image\/\w+;base64,/, "");
    var imgType = img.match(/\/(\S*)\;/); //获取文件类型
    var imgName = req.body.img._name; //获取文件名字
    var dataBuffer = new Buffer(base64Data, 'base64'); //把base64码转成buffer对象，

    //使用co模块消除异步
    function co(gen) {
        var it = gen();
        var ret = it.next();
        ret.value.then(function(res) {
            it.next(res);
        });
    }

    function WriteFileImg() {
        return Promise.resolve(true).then(function() {
            fs.writeFile('./publice/' + imgName, dataBuffer);
        });
    }

    function path() {
        return Promise.resolve(true).then(function() {
            res.end('http://' + req.host + ':8082/' + imgName);
        });
    }
    co(function* coWriteFileImg() {
        yield WriteFileImg();
        yield path();
    });
});


module.exports = router;