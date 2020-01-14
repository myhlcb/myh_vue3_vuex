<template>
  <div>
    <p>
      <router-link to="/user">/user</router-link>
      <router-link to="/user/foo">/user/foo</router-link>
      <router-link to="/user/poo">/user/bar</router-link>
      <router-link to="/login">login</router-link>
      <button @click="ddd">111111</button>
      <button @click="adds">22222</button>
      <button @click="login">login</button>
      <button @click="logina">logina</button>
    </p>
    <p>{{ adoneToDos }}</p>
    <p>getter:{{ getState }}</p>
    <p>stateCount:{{ count }}</p>
    <p>account/con:{{ con }}</p>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vueX";
import store from "../store";
export default {
  computed: {
    ...mapGetters({
      adoneToDos: "userInfo",
      getState: "count"
    }),
    ...mapState({
      count: state => {
        return state.account.count;
      }
    }),
    ...mapState("account", {
      con: state => {
        return state.count;
      }
    })
  },
  methods: {
    ddd: function() {
            this.$store.dispatch("account/login").catch(err => {
      });
      // this.$router.push("/login");
    },
    ...mapMutations({
      adds: "account/increment"
    }),
    ...mapActions({ login: "account/login" }), //子模块
    ...mapActions("account", {
      logina: "login"
    })
  }
};
</script>
<style scoped lang="scss"></style>
