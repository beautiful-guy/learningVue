<template>
  <div>
    <button @click="reduce">--</button>
    <strong>{{$store.state.count}}</strong>
    <button @click="add">++</button>
    <strong>单价为:{{}}</strong>
  </div>
</template>

<script>
  export default {
    methods:{
      reduce(){
        this.$store.commit('REDUCE')
      },
      add(){
        this.$store.commit('ADD')
      }
    },
    name: 'counter'
  }
</script>

<style scoped>
  button{
    width: 50px;
    height: 50px;
  }
  strong{
    font-size: 25px;
  }
</style>
