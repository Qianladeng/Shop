<template>
  <div id="app">
    <!--头-->
    <!--<div>-->
      <!--<mt-header fixed title="X X X X"></mt-header>-->
    <!--</div>-->

    <!--主件-->
        <!--渐入-->
    <transition>
      <router-view></router-view>
    </transition>


    <!--底部-->
    <div>
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopcar">
          <span class="mui-icon mui-icon-info-filled"></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shop">
          <span class="mui-icon mui-icon-arrowthinup"></span>
          <span class="mui-tab-label">开始购物</span>
        </router-link>
        <router-link class="mui-tab-item" to="/user">
          <span class="mui-icon mui-icon-contact">
            <span class="mui-badge">9</span>
          </span>
          <span class="mui-tab-label">账户</span>
        </router-link>
        <router-link class="mui-tab-item" to="/set">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>


<style>
  body {
    padding-bottom: 45px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;

    overflow-x: hidden;
  }
  .v-enter{
    opacity: 0;
    transform:translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;

  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.8s;
  }
</style>

