<template>
  <el-col :span="4">
    <h5>默认颜色</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <slide-item
        v-for="(item, index) in routes"
        :item="item"
        :hasChild="!!item.children"
        :index="index"
        :key="index"
      ></slide-item>
    </el-menu>
  </el-col>
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
