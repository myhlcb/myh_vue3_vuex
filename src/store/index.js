import Vuex from 'vuex';
import Vue from 'vue';
Vue.use (Vuex);
const store = new Vuex.Store ({
  modules: {
    account: {
      namespaced: true,
      state: {
        con: 1111,
      },
      getters: {
        isAdmin () {
          return this.store.con + 7;
        },
      },
      actions: {
        login({dispatch, commit, getters, rootGetters}) {
          const a = getters.isAdmin ();

          const b = rootGetters.doneToDos ();
          console.log (a, 11111111111, b, 22222);
          console.log (this.store.con, 1118);
          commit ('login');
          console.log (this.store.con, 1120, 1113);
          dispatch ('loginout');
          console.log (this.store.con, '1101--1101');
        },
        loginout({commit}) {
          commit ('login');
          console.log (this.store.con, 1101);
        },
      },
      mutations: {
        login (state) {
          state.con + 2;
        },
        loginout (state) {
          state.con - 10;
        },
      },
    },
  },

  state: {
    count: 0,
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false},
    ],
  },
  mutations: {
    increment (state) {
      state.count++;
    },
  },
  actions: {
    increment (context) {
      context.commit ('increment');
    },
  },

  getters: {
    doneToDos: state => {
      return state.todos.filter (todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getState: state => {
      return state.count;
    },
  },
});
export default store;
