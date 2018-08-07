// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/common.css'
import store from './store'
import './assets/key'

import VueResource from 'vue-resource'
Vue.use(VueResource)


// 导入axios
import Axios from 'axios'
// 将axios挂载到Vue上
Vue.prototype.$axios = Axios


//iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)


//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


//elementui

import Elementui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Elementui);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



