<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <h5>默认颜色</h5>
    <el-menu default-active="2">
      <slide-item
        v-for="(item, index) in routes"
        :item="item"
        :hasChild="!!item.children"
        :index="index"
        :key="index"
      ></slide-item>
    </el-menu>
  </el-aside>
</template>
<script>
import SlideItem from "./slide";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["routes"])
  },
  methods: {},
  components: { SlideItem }
};
</script>
