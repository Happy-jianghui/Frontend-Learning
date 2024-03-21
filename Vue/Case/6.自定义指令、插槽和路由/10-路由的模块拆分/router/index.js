import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由器
const router = new VueRouter({
    // routes 路线规则集合
    // route 一天路由规则 {path: 路径, component: 组件}
    routes: [
      {path: '/find', component: Find},
      {path: '/my', component: My},
      {path: '/friend', component: Friend}
    ]
  })

  export default router