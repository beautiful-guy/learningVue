import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:0,
    price:66
  },
  mutations:{
    ADD(state){
      state.count ++;
    },
    REDUCE(state){
      state.count --;
    },
    CHANGE_COUNT(state,payload){
      state.count = payload
    }
  },
  getters:{
    totalprice(state){
      return state.count*state.price
    }
  },
  actions:{
   handleAsync(context,payload){
      setTimeout(()=>{
        context.commit('CHANGE_COUNT',payload)
      },1000)
    }
  }

})
export default store;
