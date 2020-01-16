<template>
  <div v-bind="link(path)">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "SlideLink",
  data() {
    return {
      post: {
        is: "router-link",
        to: "/dashboard/test"
      }
    };
  },
  props:{
    path:{
      required:true,
      type:String
    }
  },
  methods: {
    link(path) {
      return {
        is: "router-link",
        to: path
      };
    }
  }
};
</script>
