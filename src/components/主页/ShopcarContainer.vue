<template>
  <div>
    <header id="header" class="mui-bar mui-bar-transparent">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    </header>

    <div class="mui-content">
      <!--静态图片-->
      <img id="img1" src="../../images/cbd.jpg"/>
      <!--轮播图片-->
      <div id="slider" class="mui-slider mui-hidden" >
        <div class="mui-slider-group">
          <!-- 第一张 -->
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../images/shuijiao.jpg">
            </a>
          </div>
          <!-- 第二张 -->
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../images/yuantiao.jpg">
            </a>
          </div>
        </div>
        <div class="mui-slider-indicator">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>
      <p style="margin: 30px 15px 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at consectetur esse hic neque nisi odio quia vel veritatis? Hic id ipsum laboriosam nam neque porro. Distinctio numquam officia quasi?
      </p>
      <p style="margin: 5px 15px 15px 15px;">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias atque debitis dolores harum illo, magnam non nulla quidem quis quisquam
      </p>
      <ul class="hm-description">
        <li>顶部最好有图片或轮播组件</li>
        <li>导航栏字体颜色和图片颜色协调</li>
      </ul>
      <h5 class="mui-content-padded">图片类型</h5>
      <form class="mui-input-group" style="margin-bottom: 300px;">
        <div class="mui-input-row mui-radio">
          <label>静态图片</label>
          <input name="style" type="radio" checked value="static">
        </div>
        <div class="mui-input-row mui-radio">
          <label>轮播图</label>
          <input name="style" type="radio" value="slider">
        </div>
      </form>
    </div>
    <!--价格-->
    <div class="mui-content">
      <div class="mui-content-padded">
        <h5 class="mui-content-padded">默认</h5>
        <div class="mui-numbox">
          <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
          <input class="mui-input-numbox" type="number" />
          <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>

        <h5 class="mui-content-padded">取值操作</h5>
        <div class="mui-numbox">
          <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
          <input id="box" class="mui-input-numbox" type="number" />
          <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
        <button id="btn" class="mui-btn" style="padding: 7px 12px;">取当前值</button>
        <h5 class="mui-content-padded">在行内</h5> 购买数量:
        <div class="mui-numbox">
          <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
          <input class="mui-input-numbox" type="number" />
          <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
        <h5 class="mui-content-padded">在表单中</h5>
        <div class="mui-card">
          <form class="mui-input-group">
            <div class="mui-input-row">
              <label>数字框一</label>
              <div class="mui-numbox">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input class="mui-input-numbox" type="number" />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
            </div>
            <div class="mui-input-row">
              <label>数字框二</label>
              <div class="mui-numbox">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input class="mui-input-numbox" type="number" />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
            </div>
          </form>
        </div>
        <br/>
        <button data-v-592a3658="" style="margin-bottom: 15px;" class="mui-btn mui-btn-primary mui-btn-block">确认购买</button>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

</style>
