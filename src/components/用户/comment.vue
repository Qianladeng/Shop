<template>
  <div>
    <!--评论-->
    <div style="margin: 50px 0;">
      <h3>发表评论</h3>
      <textarea placeholder="请输入买家秀的评论..."></textarea>
      <button class="mui-btn mui-btn-primary mui-btn-block">发表</button>

    </div>
    <!--评论区-->
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
            <div class="mui-media-body">
              Person
              <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">
            <div class="mui-media-body">
              Person
              <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
            <div class="mui-media-body">
              Person
              <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
          </a>
        </li>

      </ul>
    </div>
  </div>

    
</template>

<script>
    export default {
        name: ""
    }

</script>

<style scoped>

</style>
