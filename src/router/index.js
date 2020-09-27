
import Vue from 'vue'
//  引入Router  不是vueRouter
import Router from 'vue-router'
import mainRouter from './main-router'
Vue.use(Router)

export const routes = [...mainRouter]

const router = new Router({
  mode: 'history',
  //   es 默认写法 routes ： routes -> routes
  routes
})
export default router

