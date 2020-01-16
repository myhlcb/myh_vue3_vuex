<template>
  <el-main>
    <div class="container">
      <div v-for="(icon, index) in elIcons" :key="index" class="item">
        <div><i :class="icon"></i></div>
        <span>{{ icon }}</span>
      </div>
    </div>
  </el-main>
</template>

<script>
import elIcons from "./icons.js";
export default {
  name: "Icon",
  data() {
    console.log(elIcons);
    return { elIcons };
  }
};
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 200px;
  height: 200px;
  text-align: center;
  div {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border: 1px solid red;
    display: flex;
    align-items: center;
    i {
      display: table;
      font-size: 100px;
      margin: 0 auto;
    }
  }
}
</style>
