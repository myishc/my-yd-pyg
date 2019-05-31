import Vue from 'vue'
//导入NatUI模块
import './CubeUI/CubeUI'
import App from './App.vue'
Vue.config.productionTip = false
//导入路由模块
import router from './router/router'
//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  preLoad: 1.2
})
//导入axios,api模块
import './http/api'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
