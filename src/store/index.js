import Vuex from 'vuex';
import Vue from 'vue';
import path from 'path';
import getters from './module/getter';
Vue.use (Vuex);
const files = require.context ('./module', false, /\.js$/);

const module = {};
files.keys ().forEach (file => {
  const key = path.basename (file, '.js');
  module[key] = files (file).default;
});
const store = new Vuex.Store ({
  modules: module,
  getters,
});

export default store;
