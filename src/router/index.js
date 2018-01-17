import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pageIndex from '@/components/page/pageIndex'
import pageContent from '@/components/page/pageContent'
import writeBlogging from '@/components/page/writeBlogging'
import lunbo from '@/components/publicecomponent/lunbo'
import contenList from '@/components/publicecomponent/contenList'
import onwrite from '@/components/publicecomponent/onwrite'
import glarticles from '@/components/publicecomponent/glarticles'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'indexpage',
            // redirect:'/contenList',
            component: pageIndex
        },
        {
            path: '/page/pageContent',
            name: 'pageContent',
            component: pageContent
        },
        {
            path: '/page/writeBlogging',
            name: 'writeBlogging',
            redirect: '/page/writeBlogging/onwrite',
            children: [{
                path: 'onwrite',
                name: 'onwrite',
                component: onwrite
            }, 
            {
                path: 'glarticles',
                name: 'glarticles',
                component: glarticles
            }],
            component: writeBlogging
        },

        // {
        //   path: '/indexpage',
        //     children:[
        //     {path: '/contenList',
        //     name:'contenList', 
        //     component:contenList},
        //     ],
        //   component: pageIndex
        // }
    ]
})