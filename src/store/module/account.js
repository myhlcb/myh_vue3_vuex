import {post} from '@/api';
import {setToken} from '@/utils/auth';
import {asyncRouter} from '@/router';
const state = {
  userInfo: '11',
  count: 0,
  routes: [],
};

const actions = {
  login ({commit}, data) {
    return post ('/v1/login', data).then (data => {
      commit ('login', data);
      setToken ('info', data);
    });
  },
  loginout({commit}) {
    return post ('/v1/logout').then (() => {
      commit ('loginout');
      setToken ('info', '');
    });
  },
};
const getRouterArr = arr => {
  const array = [];
  arr.forEach (router => {
    //权限
    if (router.children) {
      router.children = getRouterArr (router.children);
    }
    array.push (router);
  });
  return array;
};
const mutations = {
  login (state, data) {
    console.log (data, 98766);
    state.userInfo = data;
    console.log (state, 777);
  },
  increment (state) {
    state.count++;
  },
  loginout (state) {
    state.userInfo = '';
  },
  routerArr (state) {
    const a = getRouterArr (asyncRouter);
    state.routes = a;
    return a;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
