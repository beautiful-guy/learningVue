<template>
    <!--<div>-->
      <!--<h1>详情</h1>-->
      <!--<h1>我是动态路由参数{{$route.params.id}}</h1>-->
    <!--</div>-->
  <div style="border: 1px solid #000;display: flex">
    <comA :count="count" :price="price"></comA>
    <comB :count="count" :price="price" @add="add" @reduce="reduce"></comB>
  </div>
</template>

<script>

  import comA from './comA';
  import comB from './comB';
    export default {
    data(){
      return {
        count:0,
        price:20
      }
    },
      methods:{
        reduce(){
          this.count --
        },
        add(){
          this.count ++
        }
      },
    components:{
      comA,
      comB
    },
        name: "detail"
    }
</script>

<style scoped>

</style>
