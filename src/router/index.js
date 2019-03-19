import VueRouter from 'vue-router'

//导入5个主件
import HomeContainer from '../components/主页/HomeContainer'
import UserContainer from '../components/主页/UserContainer'
import ShopContainer from '../components/主页/ShopContainer'
import ShopcarContainer from '../components/主页/ShopcarContainer'
import SetContainer from '../components/主页/SetContainer'
//副主件
import Location from '../components/location'
import Item from '../components/商城/Item'
import Login from '../components/设置/login'
import Comment from '../components/用户/comment'

var router= new VueRouter({
  routes:[ // 配置路由规则
    {path: '/',redirect: "/home"},
    { path: '/home' , component : HomeContainer},
    { path: '/shop' , component : ShopContainer},
    { path: '/user' , component : UserContainer},
    { path: '/shopcar' , component : ShopcarContainer},
    { path: '/set' , component : SetContainer},

    {path:'/shop/item',component:Item},
    {path: '/set/login' , component : Login},

    {path:'/user/location' , component : Location},
    {path:'/user/comment',component: Comment},
  ],
  linkActiveClass:'mui-active' //覆盖默认的路由 高亮 的类，叫 router-link-acitve
});

export default router



