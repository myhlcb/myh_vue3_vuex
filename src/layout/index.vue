<template>
  <div>
    <p>
      <router-link to="/user">/user</router-link>
      <router-link to="/user/foo">/user/foo</router-link>
      <router-link to="/user/poo">/user/bar</router-link>
      <button @click="ddd">111111</button>
    </p>
    <router-view></router-view>
  </div>
</template>
  <script>
export default {
  methods: {
    ddd: function() {
      console.log(111);
      console.log(this.$route, 222, this.$router);
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped lang='scss'>
</style>