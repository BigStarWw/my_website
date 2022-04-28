<template>
  <div class="contraction-container">
    <ul ref="scrollContainer" @scroll="onScroll()" style="height: 270px">
      <li v-for="(item, index) in lists" :key="index" style="height: 50px">
        {{ parseInt(item.id) + 1 }} ---{{ item.content }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      lists: [],
      listsOrigin: [],
      lastScroll: 0,
      timer: "",
    };
  },
  mounted() {
    // 初始化数据
    for (let i = 0; i < 10000; i++) {
      this.listsOrigin.push({
        id: i,
        content: '这是内容，这是内容，这是内容'
      })
    }
    // 初始化渲染数据
    this.initLists();
  },
  methods: {
    initLists() {
      this.lists = this.listsOrigin.slice(0, 10);
    },

    onScroll() {
      if (this.timer) return;
      this.timer = setTimeout(() => {
        // 判断是朝上还是朝下滚动
        const el = this.$refs.scrollContainer;
        let scrollTop = el.scrollTop;
        let scroll = scrollTop - this.lastScroll;
        this.lastScroll = scrollTop;
        let scrollToBottomHeight = el.offsetHeight - 60;

        if (scroll < 0 || scrollTop === 0) {
          // 朝上
          if (el.scrollTop < 60) {
            let firstItem = this.lists[0];
            let prevItem = this.listsOrigin.filter(
              (item) => parseInt(item.id) === parseInt(firstItem.id) - 1
            );

            // 非最前面的2条的时候
            if (parseInt(firstItem.id) >= 2) {
              this.lists.pop();
              el.scrollTop = 60;
            }

            if (prevItem.length) this.lists.unshift(...prevItem);
          }
        } else {
          // 朝下
          if (el.scrollTop > scrollToBottomHeight) {
            let lastItem = this.lists[this.lists.length - 1];
            let nextItem = this.listsOrigin.filter(
              (item) => parseInt(item.id) === parseInt(lastItem.id) + 1
            );

            this.lists.shift();
            this.lists.push(...nextItem);
            el.scrollTop = scrollToBottomHeight;
          }
        }
        this.timer = "";
      }, 150);
    }
  },
});
</script>
<style>
.contraction-container {
  margin-top: 60px;
  height: calc(100vh - 160px);
  width: 100%;
}
.contraction-container ul {
  padding: 10px;
  border: solid 1px #ddd;
  overflow: auto;
  width: 500px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
