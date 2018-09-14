<template>
    <div>
      <h1>小计{{$store.getters.totalprice}}</h1>
      <h1>{{news}}</h1>
    </div>
</template>

<script>
  import bus from '../bus/index';
    export default {
      // props:{
      //   count:{
      //     type:Number
      //   },
      //   price:{
      //     type:Number
      //   }
      // },
      data(){
        return{
          news:''
        }
      },
      computed:{
        // total(){
        //   // return this.count * this.price
        //   return this.$store.state.count * this.$store.state.price
        // }
      },
      mounted(){
        bus.$on('inception',msg=>{
          this.news = msg
        })
      },
        name: "com-a"
    }
</script>

<style scoped>

</style>
