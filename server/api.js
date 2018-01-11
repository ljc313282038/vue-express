// 引入Express
const express = require('express');
const app = express();
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
const router = express.Router();

//模拟文章
var content = {
    contentList: [{
            title: 'tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            auther: 'JC',
            content: `最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！
      最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的
      容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有
      最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！哪些？腾讯、
      最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！华为、思科等
       6 位顶尖专家为你解答！`,
            time: '2017-12-30',
            read: '阅读300',
            like: '点赞80',
            pinlunlist: [{
                    pl: 'tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                }
            ],
            talk: '300评论',
            dataId: 1,
            type: 'tj'
        },
        {
            title: 'tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            auther: 'JC',
            content: `最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！
      最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的
      容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有
      最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！哪些？腾讯、
      最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！华为、思科等
       6 位顶尖专家为你解答！`,
            time: '2017-12-30',
            read: '阅读300',
            like: '点赞80',
            pinlunlist: [{
                    pl: 'tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                }
            ],
            talk: '300评论',
            dataId: 1,
            type: 'tj'
        },

        {
            title: 'htmlcss最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            auther: 'JC',
            content: `最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！
      最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的
      容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有
      最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！哪些？腾讯、
      最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！华为、思科等
       6 位顶尖专家为你解答！`,
            time: '2017-12-30',
            read: '阅读300',
            like: '点赞80',
            pinlunlist: [{
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                }
            ],
            talk: '300评论',
            dataId: 1,
            type: 'tj'
        },
        {
            title: 'javascript最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            auther: 'JC',
            content: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            time: '2017-12-30',
            read: '阅读300',
            like: '点赞80',
            pinlunlist: [{
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                }
            ],
            talk: '300评论',
            dataId: 1,
            type: 'tj'
        },
        {
            title: 'tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            auther: 'JC',
            content: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            time: '2017-12-30',
            read: '阅读300',
            like: '点赞80',
            pinlunlist: [{
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                }
            ],
            talk: '300评论',
            dataId: 1,
            type: 'tj'
        },
        {
            title: 'htmlcss最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            auther: 'JC',
            content: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            time: '2017-12-30',
            read: '阅读300',
            like: '点赞80',
            pinlunlist: [{
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                }
            ],
            talk: '300评论',
            dataId: 1,
            type: 'htmlcss'
        },
        {
            title: 'javascript最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            auther: 'JC',
            content: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！',
            time: '2017-12-30',
            read: '阅读300',
            like: '点赞80',
            pinlunlist: [{
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                },
                {
                    pl: '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答'
                }
            ],
            talk: '300评论',
            dataId: 1,
            type: 'javascript'
        }
    ],
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
    //找到dataId对应的文章
    var arrayFilter = content.contentList.filter(function(item) {
        return item.dataId == mydataId;
    });

    //然后给找到的文章评论字段添加评论
    arrayFilter[0].pinlunlist.push({ pl: textContent });
    console.log(arrayFilter);
    //返回数据前端用data.body接受
    response = { pl: textContent };
    res.end(JSON.stringify(response));
});

//给子页面发送文章数据pageContent
router.get('/api/login/pageContent', (req, res) => {
    // 输出 JSON 格式
    var mydataId = req.query.dataId;
    var sql = 'SELECT * FROM `articlelist` WHERE ID='+'\"'+mydataId+'\"';
    db.query(sql, function(err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
         response =rows;
         res.end(JSON.stringify(response));
    });
});
//给首页发送文章列表
router.get('/api/login', (req, res) => {
    // 输出 JSON 格式
    var params = req.query;
    var sql = 'SELECT * FROM `articlelist` WHERE TYPE='+'\"'+params.rot+'\"';
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return;
        }
         response =rows;
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
    if(userData_2){
          req.session.login = userData_2[0].userName; //每一次访问时，session对象的lastPage会自动的保存或更新内存中的session中去。         
    }
  
    response = req.session.login;
    res.end(response);
});
//
router.get('/api/beforlogin', (req, res) => {
   
  if(req.session.login){
    response = req.session.login;
    res.end(response);
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


module.exports = router;