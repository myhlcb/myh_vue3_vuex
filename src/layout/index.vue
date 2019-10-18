<template>
  <div>
    <p>
      <router-link to="/user">/user</router-link>
      <router-link to="/user/foo">/user/foo</router-link>
      <router-link to="/user/poo">/user/bar</router-link>
      <router-link to="/login">login</router-link>
      <button @click="ddd">111111</button>
      <button @click="adds">22222</button>
      <button @click="addsss">333333</button>
      <button @click="login">login</button>
    </p>
    <p>{{adoneToDos}}</p>
    <p>getter:{{getState}}</p>
    <p>stateCount:{{count}}</p>
    <p>account/con:{{con}}</p>
    <router-view></router-view>
  </div>
</template>
  <script>
import { mapState, mapGetters, mapMutations, mapActions } from "vueX";
import store from "../store";
export default {
  computed: {
    ...mapGetters({
      adoneToDos: "doneToDos",
      getState: "getState"
    }),
    ...mapState({
      count: state => {
        return state.count;
      }
    }),
    ...mapState("account", {
      con: state => {
        return state.con;
      }
    })
  },
  methods: {
    ddd: function() {
      console.log(111, this.$store.state.count, 2222);
      console.log(this.$route, 222, this.$router);
      this.$store.dispatch("increment");
      this.store.dispatch(); //子模块
      // this.$router.push("/login");
    },
    ...mapMutations({
      adds: "increment"
    }),
    ...mapActions({
      addsss: "increment"
    }),
    ...mapActions({ login: "account/login" }) //子模块
  }
};
</script>
<style scoped lang='scss'>
</style>