<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <!--<div>-->
      <!--<ul>-->
        <!--<li>-->
          <!--<router-link :to="{name:'home'}">首页</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link to="/detail/998">详情</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link :to="{name:'login'}">登录</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
