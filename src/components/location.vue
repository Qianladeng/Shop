<template>
    <div>
      <h1>新闻列表</h1>
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell mui-media">
          <router-link to="/home/newsinfo/1" class="mui-navigate-right">
            <img class="mui-media-object mui-pull-left" src="../images/cbd.jpg">
            <div class="mui-media-body">
              CBD
              <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a class='mui-navigate-right' href="javascript:">
            <img class="mui-media-object mui-pull-left" src="../images/yuantiao.jpg">
            <div class="mui-media-body">
              远眺
              <p class='mui-ellipsis'>静静的看这个世界，最后终于疯了</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a class="mui-navigate-right">
            <img class="mui-media-object mui-pull-left" src="../images/shuijiao.jpg">
            <div class="mui-media-body">
              幸福
              <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
