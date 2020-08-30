import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const consRouterMaps = [
    {path : "/", meta : {title : "初始页面"}, component : () => import('@/components/HelloWorld'), hidden: true},
    {path : "/first", name: "first", meta : {title : "first页面"}, component :() => import('@/components/views/first'), hidden: true},
    {path : "/second", name: "second", meta : {title : "second页面"}, component :() => import('@/components/views/second'), hidden: true}
];

export default new Router({
  mode : "history",
  scrollBehavior: () =>({y : 0}),
  routes : consRouterMaps
})
