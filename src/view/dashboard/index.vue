<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <slide-bar></slide-bar>
      <page-main></page-main>
    </el-container>
  </div>
</template>
<script>
import SlideBar from "./sliderBar";
import PageMain from "./pagemain";
export default {
  data() {
    return {
      isCollapse: true,
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: { SlideBar, PageMain }
};
</script>
