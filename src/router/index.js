import VueRouter from 'vue-router'

//导入4个主件
import HomeContainer from '../components/主页/HomeContainer'
import MemberContainer from '../components/主页/MemberContainer'
import ShopcarContainer from '../components/主页/ShopcarContainer'
import SearchContainer from '../components/主页/SetContainer'
//副主件
import Location from '../components/location'

var router= new VueRouter({
  routes:[ // 配置路由规则
    {path: '/',redirect: "/home"},
    { path: '/home' , component : HomeContainer},
    { path: '/member' , component : MemberContainer},
    { path: '/shopcar' , component : ShopcarContainer},
    { path: '/search' , component : SearchContainer},
    { path: '/member/location' , component : Location},
  ],
  linkActiveClass:'mui-active' //覆盖默认的路由 高亮 的类，叫 router-link-acitve
});

export default router



