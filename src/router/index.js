import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pageIndex from '@/components/page/pageIndex'
import pageContent from '@/components/page/pageContent'
import writeBlogging from '@/components/page/writeBlogging'
import lunbo from '@/components/publicecomponent/lunbo'
import contenList from '@/components/publicecomponent/contenList'

Vue.use(Router)
export default new Router({
 mode:'history',
  routes: [
    {
      path: '/',
      name:'indexpage',
      // redirect:'/contenList',
      component: pageIndex
    },
     {
      path: '/page/pageContent',
      name:'pageContent',
      component: pageContent
    },
    {
      path: '/page/writeBlogging',
      name:'writeBlogging',
      component: writeBlogging
    }
    // {
    //   path: '/contenList',
    //     children:[
    //     {path: '/contenList',
    //     name:'contenList', 
    //     component:contenList},
    //     ],
    //   component: pageIndex
    // }
  ]
})
