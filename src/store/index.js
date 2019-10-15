import Vuex from 'vuex';
import Vue from 'vue';
Vue.use (Vuex);
const store = new Vuex.store ({
  state: {
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++;
    },
  },
});
export default store;
