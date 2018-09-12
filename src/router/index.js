import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

import home from '../components/home'
const router =  new Router({
  routes: [
    {
      path:'/main',
      component:()=>import('../view/index'),
      meta:{
        title:'主体'
      },
      redirect:'/main/home',
      children:[
        {
          path: 'home',
          name:'home',
          component: home,
          meta:{
            title:'首页'
          }
        },
        {
          path:'login',
          name:'login',
          component:()=>import('../components/login'),
          meta:{
            title:'登录'
          }
        },
        {
          path:'detail/:id',
          component:()=>import('../components/detail'),
          name:'detail',
          meta:{
            title:'详情'
          }
        }
      ]
    }
  ]
})
router.beforeEach((to,from,next)=>{
  Nprogress.start();
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})
router.afterEach((to,from)=>{
  Nprogress.done();
})
export default router;
