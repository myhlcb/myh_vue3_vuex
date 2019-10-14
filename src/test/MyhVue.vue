<template>
  <div id="myh_vue">
    <input type="text" placeholder="请输入目标" v-model="todo" v-bind:class="{empty:!todo}" />
    <input type="button" value="确定" @click="add" />
    <ol>
      <li-item
        v-for="td in todoList"
        v-bind:td="td"
        v-bind:dbclick="dbclick"
        v-bind:finished="finished"
        v-bind:deleted="deleted"
        v-bind:edit-to-do="editToDo"
        v-bind:editDone="editDone"
        :size="size"
        v-bind:cancleEdit="cancleEdit"
        @enlarge-text="size += 0.1"
      ></li-item>
    </ol>
  </div>
</template>
<script>
import Vue from "vue";
const key = "vue_local_storage";
const array = [
  { id: 0, title: "钻精js", finished: false },
  { id: 1, title: "做技术大牛", finished: false },
  { id: 2, title: "迎娶白富美", finished: false },
  { id: 3, title: "走人生巅峰", finished: false }
];
var store = {
  storeItem: function(val) {
    localStorage.setItem(key, val);
  },
  getItemData: function() {
    return JSON.parse(localStorage.getItem(key)) || array;
  }
};
// Vue.directive("focus", {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function(el) {
//     // 聚焦元素
//     el.style.color = "red";
//   }
// });
export default {
  name: "myh_vue_test",
  data: function() {
    return {
      todo: "",
      todoList: store.getItemData(),
      editToDo: {},
      size: 1
    };
  },
  methods: {
    add: function() {
      if (!this.todo) {
        alert("请输入内容");
      }
      const id = this.todoList.length;
      this.todoList.push({ id: id, title: this.todo, finished: false });
      store.storeItem(JSON.stringify(this.todoList));
      this.todo = "";
    },
    finished: function(td) {
      alert(JSON.stringify(this.editToDo));
      td.finished = true;
    },
    dbclick: function(td) {
      this.editToDo = { id: td.id, title: td.title, finished: false };
      alert(this.editToDo.id);
    },
    editDone: function(td) {
      this.editToDo = {};
    },
    cancleEdit: function(td) {
      td.title = this.editToDo.title;
      this.editToDo = {};
    },
    deleted: function(td) {
      this.todoList.splice(this.todoList.indexOf(td), 1);
    }
  },
  components: {
    liItem: {
      name: "li-item",
      directives: {
        focus: {
          inserted: function(el) {
            console.log(el, 11111);
            // 聚焦元素
            el.style.color = "red";
          }
        }
      },
      props: [
        "td",
        "dbclick",
        "finished",
        "deleted",
        "editToDo",
        "editDone",
        "cancleEdit",
        "size"
      ],
      template: `<li>
                <span v-bind:class='{finished:td.finished}' @dblclick='dbclick(td)' :style="{fontSize:size+'em'}" >{{td.title}}</span>
                <input type="button" value="增大" @click="$emit('enlarge-text')">
                <input type="button" value="标记完成" @click='finished(td)'>
                <input type="text" v-focus>
                <input type="button" value="删除" @click='deleted(td)'>
                <input type="text" value="修改" v-model='td.title' v-if='editToDo.id===td.id' @keyup.enter='editDone(td)'
                    @keyup.esc='cancleEdit(td)'>
            </li>`
    }
  }
};
</script>
