import Vuex from 'vuex';
import Vue from 'vue';
import {post} from '@/api';
import {setToken} from '@/utils/auth';
Vue.use (Vuex);
const store = new Vuex.Store ({
  modules: {
    account: {
      namespaced: true,
      state: {
        userInfo: '',
        con: 0,
      },
      getters: {
        userInfo: state => {
          state.userInfo;
        },
        doneToDos: state => {
          state.con - 1;
        },
        getState: state => {
          state.con;
        },
      },
      actions: {
        login ({commit}, data) {
          return post ('/v1/login', data).then (data => {
            commit ('login', data);
            console.log (data, 111111);
            setToken ('info', data);
          });
        },
        loginout({commit}) {
          return post ('/v1/logout').then (() => {
            commit ('loginout');
            setToken ('info', '');
          });
        },
      },
      mutations: {
        login (state, data) {
          console.log (data, 98766);
          state.userInfo = data;
          console.log (state, 777);
        },
        loginout (state) {
          state.userInfo = '';
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
