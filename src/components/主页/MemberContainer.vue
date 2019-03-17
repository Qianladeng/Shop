<template>
  <div>
    <mt-header fixed title="X X X X" style="margin-bottom: 40px;"></mt-header>

    <!--轮播图-->
    <mt-swipe :auto="5000" >
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <!--九宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">Home</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
        <div class="mui-media-body">Email</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">Chat</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/member/location">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">Maps</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">Search</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">Phone</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-star-filled"></span>
        <div class="mui-media-body">Favorites</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-info"></span>
        <div class="mui-media-body">About</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-more"></span>
        <div class="mui-media-body">More</div></a></li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped>
  .mint-swipe{
    height: 250px;

  }
  .mint-swipe-item:nth-child(1){
    background: url("../../images/muwu.jpg");
    width: 100%;
    height: 100%;
  }
  .mint-swipe-item:nth-child(2){
    background: url("../../images/yuantiao.jpg");
  }
  .mint-swipe-item:nth-child(3){
    background: url("../../images/shuijiao.jpg");
  }
  .mint-swipe-item {
    width: 100%;
    height: 100%;
  }

</style>
