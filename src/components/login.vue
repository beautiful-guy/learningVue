<template>
  <div>
  <div>我是登录页面</div>
  用户名：<input type="text" v-model="username">
  密码：<input type="password" v-model="password">
  <button @click="getdata">注册</button>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "login",
      data() {
        return {
          username: '',
          password: ''
        }
      },
      methods:{
          getdata(){
            axios.post('http://localhost:3000/login',{
              username:this.username,
              password:this.password
            }).then(res=>{
              if(res.data.code == 200){
                alert('登录成功');
                this.$router.push('/main/detail/50')
              }
            }).catch(err=>{
              console.log(err)
            })
          }
      }
    }
</script>




<style scoped>

</style>
