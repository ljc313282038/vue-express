import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  userName:'',
  userAvatar:'',
  pageContentAData:'',
  nowIndex:0,
  productList: [{
      name: '推荐',
      path: 'contenList',
      key: 'tj',
      active: false
    },
    {
      name: 'html/css',
      path: 'contenList',
      key: 'htmlcss',
      active: false
    },
    {
      name: 'javascript',
      path: 'contenList',
      key: 'javascript',
      active: false
    },
    {
      name: 'vue',
      path: 'contenList',
      key: 'vue',
      active: false
    },
    {
      name: 'webpack',
      path: 'contenList',
      key: 'webpack',
      active: false
    },
    {
      name: 'node.js',
      path: 'contenList',
      key: 'node',
      active: false
    }
  ],
  navlist: [
    { navn: "博客首页" },
    { navn: '问答' },
    { navn: '资源' },
    { navn: '活动' },
    { navn: '商城' },
  ],

  Technical:[
   {
  	Tetit:'Qualcomm开发者专区',
  	url:'http://qualcomm.csdn.net/',
  	img:require('./../assets/images/dd9ffc07b66b82fc96b707d38c3259f6.jpg'),
  	text:'本专区为移动开发者打造一流开发环境，提供新闻资讯和全面的技术资源。'
	},
	{
  	Tetit:'Qualcomm开发者专区',
  	url:'http://qualcomm.csdn.net/',
  	img:require('./../assets/images/dd9ffc07b66b82fc96b707d38c3259f6.jpg'),
  	text:'本专区为移动开发者打造一流开发环境，提供新闻资讯和全面的技术资源。'
	},
	{
  	Tetit:'Qualcomm开发者专区',
  	url:'http://qualcomm.csdn.net/',
  	img:require('./../assets/images/dd9ffc07b66b82fc96b707d38c3259f6.jpg'),
  	text:'本专区为移动开发者打造一流开发环境，提供新闻资讯和全面的技术资源。'
	}
  ],
  Technical2:[
  	{
  	Tetit:'华为云计算',
  	url:'http://huawei.csdn.net/',
  },
  {
  	Tetit:'华为云计算',
  	url:'http://huawei.csdn.net/',
  },
  {
  	Tetit:'AWS中文技术社区',
  	url:'http://aws.csdn.net/',
  	},
  	 {
  	Tetit:'腾讯云技术社区',
  	url:'http://g.csdn.net/5271587',
  	}
  ]

}
const mutations = {
  seTpageContentAData(state,n) {
    state.pageContentAData=n;
  }
}
const actions = {}

export default new Vuex.Store({
  state,
  mutations
})
