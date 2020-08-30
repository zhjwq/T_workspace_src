import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const consRouterMaps = [
  {path : "/", meta : {title : "初始页面"}, component : () => import('@/components/HelloWorld'), hidden: true}
];

export default new Router({
  routes: consRouterMaps
})
