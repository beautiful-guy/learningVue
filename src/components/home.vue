<template>
    <div>
      <h1>首页</h1>
      <router-link :to="{path:'/main/login',query:{
        userinfo:'yh'
      }}">跳转到登录
      </router-link>
      <button @click="getdata">未进行跨域</button>
      <button @click="getjsonp">使用jsonP来跨域</button>
      <button @click="getnosimple">非简单请求</button>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "home",
      methods:{
          getdata(){
            axios.get('http://localhost:3000/getMsg').then(res=>{
              console.log(res)
            }).catch(err=>{
              console.log(err)
            })
          },
        getjsonp(){
          let script = document.createElement('script');
          let body = document.body;
          script.src = "http://localhost:3000/getJsonp?callback=getData";
          body.appendChild(script);
        },
        getnosimple(){
            axios.post('http://localhost:3000/noSimple',{username:'yuanhang'}).then(res=>{
              console.log(res)
            }).catch(err=>{
              console.log(err)
            })
        }
      }
    }
</script>

<style scoped>

</style>
