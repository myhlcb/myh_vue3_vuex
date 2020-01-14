<template>
  <el-col :span="4">
    <h5>默认颜色</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-for='item in routes'>
      <slide-item 
      :item='item' 
      :hasChild='!!item.children'></slide-item>
    </el-menu>
  </el-col>
</template>
<script>
import SlideItem from "./slide";
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
    };
  },
  computed:{
...mapGetters(['routes']),
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath, 1);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath, 2);
    }
  },
  components: { SlideItem }
};
</script>
