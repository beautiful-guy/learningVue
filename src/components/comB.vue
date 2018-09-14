<template>
<div>
  <button @click="reduce">--</button>
  <strong>{{$store.state.count}}</strong>
  <button @click="add">++</button>
  <strong>单价为:{{$store.state.price}}</strong>
  <input type="text" v-model="count">
  <button @click="CHANGE_COUNT(count)">提交</button>
  <button @click="asyncHandle">异步提交</button>
  <button @click="talkSoming">兄弟B给兄弟A要说的话</button>
</div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import bus from '../bus/index';
    export default {
      data(){
        return{
          count:"",
          msg:'我想对A说，你是个猪'
        }
      },
            // props:{
      //   count:{
      //     type:Number
      //   },
      //   price:{
      //     type:Number
      //   }
      // },
      methods:{
        reduce(){
          // this.count --不能直接对父组件传过来的值进行操作，如想修改值，请在父组件中修改
          //触发父组件的自定义事件
          // this.$emit('reduce')
          this.$store.commit('REDUCE')
        },
        add(){
          // this.$emit('add')
          this.$store.commit('ADD')
        },
        // changevalue(){
        //   this.$store.commit('CHANGE_COUNT',this.count)
        // }
        ...mapMutations(['CHANGE_COUNT']),
        asyncHandle(){
          // setTimeout(()=>{
          //   this.CHANGE_COUNT(this.count)
          // },1000)
          this.$store.dispatch('handleAsync',888)
        },
        talkSoming(){
          bus.$emit('inception',this.msg)
        }
      },
        name: "com-b"
      }
</script>

<style scoped>
button{
  width: 80px;
  height: 50px;
}
strong{
  font-size: 25px;
}
</style>
