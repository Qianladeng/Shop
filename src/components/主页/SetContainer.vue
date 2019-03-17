<template>
  <div style="padding: 20px 0;">
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/1" class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" src="../../images/sinaweibo.png"  style="height: 21px;">
          <div class="mui-media-body">账号管理</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
      <router-link to="/home/newsinfo/1" class="mui-navigate-right">
        <div class="mui-media-body">手机号码</div>
      </router-link>
    </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/1">
          <div class="mui-switch mui-active">
            <div class="mui-switch-handle"></div>
          </div>
          <div class="mui-media-body">消息通知</div>
        </router-link>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron" style="margin-top: 20px;">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/1" class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" src="../../images/qihoo.png"  style="height: 21px;">
          <div class="mui-media-body">账号管理</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/1" class="mui-navigate-right">
          <a><span class="mui-icon-extra mui-icon-extra-cart"></span></a>

          <div class="mui-media-body">联系人</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/1" class="mui-navigate-right">
          <div class="mui-media-body">通用</div>
        </router-link>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron" style="margin-top: 20px;">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/1" class="mui-navigate-right">
          <div class="mui-media-body">更多设置</div>
        </router-link>
      </li>
    </ul>
    <br>
    <button class="mui-btn mui-btn-primary mui-btn-block">切换账号</button>
    <button class="mui-btn mui-btn-negative mui-btn-block">注销账号</button>


  </div>
</template>

<script>

</script>

<style scoped>

</style>
