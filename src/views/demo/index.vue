<template>
  <div class="demo-container">
    <div class="demo-header flex-center">
      <p class="demo-header-txt">Demo</p>
    </div>
    <div class="demo-content">
      <el-skeleton
        style="width: 31%; height: 1.97rem"
        :loading="loading"
        animated
        v-for="(item, index) in lists"
      >
        <template #template>
          <el-skeleton-item variant="image" style="width: 100%; height: 1.145rem" />
          <div style="padding: 7px;">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <el-skeleton-item variant="p" style="width: 100%; margin: 7px 0 .07rem 0;" />
            <el-skeleton-item variant="p" style="width: 50%" />
          </div>
        </template>
        <template #default>
          <div class="demo-item">
            <img
              class="demo-item-img"
              src="../../assets/images/about/travel/travel01.jpeg"
            />
            <div class="demo-item-content">
              <h3 class="demo-item-title">{{ item.title }}</h3>
              <p class="demo-item-desc">{{ item.desc }}</p>
              <p class="demo-item-time">{{ item.time }}</p>
            </div>
          </div>
        </template>
      </el-skeleton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
interface listItem {
  title: string;
  desc: string;
  url: string;
  time: string;
  category: string[];
}
let lists: listItem[] = reactive([
  {
    title: "测试标题1",
    desc: "这是一个关于爱心css样式的式的式的,一个demo",
    url: "",
    time: "2022-04-18",
    category: ["css", "js"],
  },
  {
    title: "测试标题1",
    desc: "这是一个关于爱心css样式的式的式的式的式的式的式的式的式的式的式的式的式的式的式的式的式的式的式的,一个demo",
    url: "",
    time: "2022-04-18",
    category: ["css", "js"],
  },
  {
    title: "测试标题1",
    desc: "这是一个关于爱心css样式的式的式的,一个demo",
    url: "",
    time: "2022-04-18",
    category: ["css", "js"],
  },
  {
    title: "测试标题1",
    desc: "这是一个关于爱心css样式的式的式的,一个demo",
    url: "",
    time: "2022-04-18",
    category: ["css", "js"],
  },
]);
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
.demo-container {
  background: #f0f4f3;
  overflow: hidden;
  .demo-header {
    height: 280px;
    background: url("@/assets/images/demo/bg.jpg") no-repeat center;
    background-size: cover;
    position: relative;
    .demo-header-txt {
      color: #fff;
      font-size: 50px;
      font-style: italic;
      font-weight: bold;
    }
  }
  .demo-content {
    width: 85%;
    margin: 50px auto;
    min-height: 600px;
    display: flex;
    flex-wrap: wrap;
    .demo-item {
      margin: 0 2.5% 50px 0;
      width: 31%;
      height: 380px;
      background: #fff;
      overflow: hidden;
      border-radius: 5px;
       box-shadow: 0 2px 16px 0px #cecece;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:hover{
        cursor: pointer;
         transform: translateY(-3px);
         transition: all .4s;
      }
      .demo-item-img {
        width: 100%;
        height: 220px;
        object-fit: cover;
      }
      .demo-item-content {
        padding: 7px;
        .demo-item-title {
          color: $mainTxtColor;
          font-size: 22px;
        }
        .demo-item-desc {
          color: $mainsSubTxtColor;
          margin: 7px 0 15px 0;
          height: 48px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .demo-item-time {
          color: $mainsSubTxtColor;
        }
      }
    }

    .el-skeleton {
      margin: 0 2.5% 50px 0;
      width: 31%;
      height: 380px;
      overflow: hidden;
      border-radius: 5px;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}
</style>
