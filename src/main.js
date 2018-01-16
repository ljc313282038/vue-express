// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import storeConfig from './store/store'
import Element from 'element-ui'
import App from './App'
import router from './router'
import  VueResource  from 'vue-resource'
// import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './assets/css/rest.css'
// Vue.prototype.$http = axios

// Vue.prototype.$http = axios

Vue.use(mavonEditor)
// Vue.use(axios)
Vue.use(VueResource) 
Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new333 */
new Vue({
  el: '#app',
  store:storeConfig,//使用store
  router,
  template: '<App/>',
  data:{
  	eventHub: new Vue()
  },
  components: { App }
})
