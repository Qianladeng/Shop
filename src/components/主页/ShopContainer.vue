<template>
  <div style="padding-top: 40px;text-align: center;">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">商城首页+搜索栏</h1>
    </header>

    <div style="height: 70px;background:#8a6de9;margin: 5px 0;">功能栏<br>
      分类 排行榜</div>
    <h1 style="background: #6d6d72;height: 100px;margin:10px 0;">轮播图<br>最新商品</h1>


    <router-link to="/shop/item"><div style="width: 50%;height: 100px;float: left;background: #2ac845;">新品</div></router-link>
    <div style="width: 50%;height: 100px;float: left;background: #dc5274;">限时抢购</div>
    <div style="width: 50%;height: 100px;float: left;background: #dcca66;">热门</div>
    <div style="width: 50%;height: 100px;float: left;background: #8ddcd8;">其他</div>
  </div>
</template>
