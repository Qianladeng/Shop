<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title" >登录</h1>
    </header>
    <div class="mui-content" style="margin-top: 30px;">
      <form id='login-form' class="mui-input-group" >
        <div class="mui-input-row">
          <label>Account :</label>
          <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
        </div>
        <div class="mui-input-row">
          <label>Password : </label>
          <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
        </div>
      </form>
      <form class="mui-input-group" style="margin-top: 10px;">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell">
            AutoLogin
            <div id="autoLogin" class="mui-switch">
              <div class="mui-switch-handle"></div>
            </div>
          </li>
        </ul>
      </form>
      <div class="mui-content-padded" style="margin: 20px;">
        <button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" style="padding: 10px 0;">Login</button>
        <div class="link-area" style="text-align: center;margin: 50px;"><a id='reg'>Sign up</a> <span class="spliter">|</span> <a id='forgetPassword'>Forget Password?</a>
        </div>
      </div>
    </div>
  </div>

</template>



<style scoped>

</style>
