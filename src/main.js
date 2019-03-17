import Vue from 'vue/dist/vue.min'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import app from './APP.vue'
import VueRouter from 'vue-router'
import "./css/mui.min.css";

Vue.use(MintUI);

//vue-resource
// import VueResource from 'vue-resource'






//头部 ， 轮播图
import {Header ,Swipe ,SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
//底部
import {Tabbar, TabItem} from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
//Switch
import {Switch} from 'mint-ui';
Vue.component(Switch.name, Switch);



Vue.use(VueRouter);

//导入router.js
import router from './router/index';

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
});

