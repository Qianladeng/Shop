<template>
    <div class="container" style="padding-top: 50px;">
      <!--头部-->
      <div class="mui-bar mui-bar-nav ">
        <router-link to="/shop" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">购物标题</h1>
      </div>
      <!--商品内容-->
      <div class="group" style="width: 90%;height:280px;margin: auto;">
        <div style="width: 48%;height: 240px;float: left;border: 1px solid#adc1ff">
          <div style="height: 60%;">
            <router-link to="/shopcar"><img src="../../ItemImage/001.jpg" alt="#" style="max-width: 100%;"></router-link>
          </div>
          <div style="height: 50%;background: #c8c7cc;padding: 10px 10px 0 10px;">
            <span>物品名称物品名称物品名称物品...</span><br>
            <span class="tag">送货上门</span><br>
            <span>￥ 580</span>
            <router-link to="/shopcar" style="float: right;"><button class="mui-btn-danger" style="padding: 2pxs;">物品详情</button></router-link>
          </div>
        </div>
        <div style="width: 48%;height: 240px;float: right;">
          <div style="max-width: 100%;max-height: 60%;">
            <img src="../../ItemImage/002.jpg" alt="#" style="max-width: 100%;">
          </div>
          <div style="height: 50%;background:#c8c7cc;padding: 10px 10px;">
            <span>物品名称物品名称物品名称物品名...</span><br>
            <span class="tag">送货上门</span><br>
            <span>￥ 580</span>
            <span style="float: right;"><button class="mui-btn-danger">物品详情</button></span>
          </div>
        </div>
      </div>
      <div class="group" style="width: 90%;height:280px;margin: auto;">
        <div style="width: 48%;height: 240px;float: left;border: 1px solid#adc1ff">
          <div style="height: 60%;">
            <img src="../../ItemImage/003.jpg" alt="#" style="max-width: 100%;">
          </div>
          <div style="height: 50%;background: #c8c7cc;padding: 10px 10px 0 10px;">
            <span>物品名称物品名称物品名称物品...</span><br>
            <span class="tag">送货上门</span><br>
            <span>￥ 580</span>
            <span style="float: right;"><button class="mui-btn-danger">物品详情</button></span>
          </div>
        </div>
        <div style="width: 48%;height: 240px;float: right;">
          <div style="max-width: 100%;max-height: 60%;">
            <img src="../../ItemImage/004.jpg" alt="#" style="max-width: 100%;">
          </div>
          <div style="height: 50%;background:#c8c7cc;padding: 10px 10px;">
            <span>物品名称物品名称物品名称物品名...</span><br>
            <span class="tag">送货上门</span><br>
            <span>￥ 580</span>
            <span style="float: right;"><button class="mui-btn-danger">物品详情</button></span>
          </div>
        </div>
      </div>
      <div class="group" style="width: 90%;height:280px;margin: auto;">
        <div style="width: 48%;height: 240px;float: left;border: 1px solid#adc1ff">
          <div style="height: 60%;">
            <img src="../../ItemImage/001.jpg" alt="#" style="max-width: 100%;">
          </div>
          <div style="height: 50%;background: #c8c7cc;padding: 10px 10px 0 10px;">
            <span>物品名称物品名称物品名称物品...</span><br>
            <span class="tag">送货上门</span><br>
            <span>￥ 580</span>
            <span style="float: right;"><button class="mui-btn-danger">物品详情</button></span>
          </div>
        </div>
        <div style="width: 48%;height: 240px;float: right;">
          <div style="max-width: 100%;max-height: 60%;">
            <img src="../../ItemImage/002.jpg" alt="#" style="max-width: 100%;">
          </div>
          <div style="height: 50%;background:#c8c7cc;padding: 10px 10px;">
            <span>物品名称物品名称物品名称物品名...</span><br>
            <span class="tag">送货上门</span><br>
            <span>￥ 580</span>
            <span style="float: right;"><button class="mui-btn-danger">物品详情</button></span>
          </div>
        </div>
      </div>
      <div class="group" style="width: 90%;height:280px;margin: auto;">
        <div style="width: 48%;height: 240px;float: left;border: 1px solid#adc1ff">
          <div style="height: 60%;">
            <img src="../../ItemImage/001.jpg" alt="#" style="max-width: 100%;">
          </div>
          <div style="height: 50%;background: #c8c7cc;padding: 10px 10px 0 10px;">
            <span>物品名称物品名称物品名称物品...</span><br>
            <span class="tag">送货上门</span><br>
            <span>￥ 580</span>
            <span style="float: right;"><button class="mui-btn-danger">物品详情</button></span>
          </div>
        </div>
        <div style="width: 48%;height: 240px;float: right;">
          <div style="max-width: 100%;max-height: 60%;">
            <img src="../../ItemImage/002.jpg" alt="#" style="max-width: 100%;">
          </div>
          <div style="height: 50%;background:#c8c7cc;padding: 10px 10px;">
            <span>物品名称物品名称物品名称物品名...</span><br>
            <span class="tag">送货上门</span><br>
            <span>￥ 580</span>
            <span style="float: right;"><button class="mui-btn-danger">物品详情</button></span>
          </div>
        </div>
      </div>



    </div>
</template>



<style scoped>
  span{ font-size: 10px; }
  .tag{ color:#007aff;border:1px solid#007aff}
</style>
