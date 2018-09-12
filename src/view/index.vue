<template>
    <div class="container">
      <div class="header">
          <h1>头部</h1>
      </div>
      <div class="nav">
          <ul>
            <li>
              <router-link :to="{path:'/main/home'}">跳转到首页</router-link>
            </li>
            <li>
              <router-link :to="{path:'/main/login'}">跳转到登录</router-link>
            </li>
            <li>
              <router-link :to="{path:'/main/detail/100'}">跳转到详情</router-link>
            </li>
          </ul>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .container{
    padding: 0;
    margin: 0;
    color: white;
  }
  .header{
    padding-left: 200px;
    text-align: center;
    background: #0ff;
  }
  .nav{
    position: fixed;
    width: 200px;
    top: 0;
    bottom: 0;
    left: 0;
    background: #173647;
    z-index: 100;
  }
  .main-content{
    padding-left: 200px;
    text-align: center;
    background: #f00;
  }
</style>
