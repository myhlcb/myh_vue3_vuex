<template>
  <div>
    <el-menu-item v-if="!hasChild" :index="index.toString()">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.meta.name }}</span>
    </el-menu-item>
    <el-submenu v-else :index="index.toString()">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.meta.name }}</span>
      </template>
      <slide-item
        v-for="(child, index) in item.children"
        :item="child"
        :hasChild="!!child.children"
        :index="index"
        :key="index"
      ></slide-item>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "SlideItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    hasChild: {
      type: Boolean,
      default: true
    }
  }
};
</script>
