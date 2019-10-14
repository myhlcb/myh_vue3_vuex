<template>
  <div class="component-a">
    <!-- 一个简单的树形组件 -->
    <button @click="counter">{{count}}</button>
    <tree :treeData="treeData"></tree>
  </div>
</template>
<script>
export default {
  name: "component-a",
  data() {
    return {
      treeData: [
        {
          title: "树形标题一",
          expand: true,
          children: [
            {
              title: "子标题1",
              expand: true
            },
            {
              title: "子标题2",
              expand: true,
              children: [
                {
                  title: "子标题2.1",
                  expand: true
                },
                {
                  title: "子标题2.2",
                  expand: true
                },
                {
                  title: "子标题2.3",
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      count: 0
    };
  },
  components: {
    // 自定义组件
    tree: {
      // 组件的名称
      name: "tree",
      // 模板
      template: ` 
            <ul>
               <li v-for="item in treeData">
                 <span>{{item.title}}</span>
	         <!-- 在组件内部调用自己 -->
                 <tree v-if="item.children" v-bind:treeData="item.children"></tree >
               </li>
            </ul>`,
      // 通过父组件传递的数据
      props: ["treeData"]
    }
  },
  methods: {
    counter: function() {
      console.log(1111, this.count);
      this.count++;
    }
  }
};
</script>
 <style lang="less" scoped></style>
