<template>
  <div class="demo-container">
    <div class="demo-header flex-center">
      <p class="demo-header-txt">Demo</p>
      <p class="demo-header-sub-txt">
        这个版块主要是展示一些学习、开发过程中总结的“花里胡哨”的demo；
        主要是记录和总结，能给开发的朋友们提供一些思路也是极好滴。
      </p>
    </div>
    <div class="demo-content">
      <el-skeleton
        style="width: 31%; height: 1.97rem"
        :loading="loading"
        animated
        v-for="(item, index) in state.lists"
      >
        <template #template>
          <el-skeleton-item
            variant="image"
            style="width: 100%; height: 1.145rem"
          />
          <div style="padding: 7px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <el-skeleton-item
              variant="p"
              style="width: 100%; margin: 7px 0 0.07rem 0"
            />
            <el-skeleton-item
              variant="p"
              style="width: 100%; margin: 7px 0 0.07rem 0"
            />
            <el-skeleton-item variant="p" style="width: 50%" />
          </div>
        </template>
        <template #default>
          <div class="demo-item" @click="goDetail(item.fileName)">
            <!-- <img class="demo-item-img" :src="item.imgUrl || demoDefault" /> -->
            <el-image
              class="demo-item-img"
              :key="item.imgUrl || demoDefault"
              :src="item.imgUrl || demoDefault"
              lazy
            />
            <div class="demo-item-content">
              <h3 class="demo-item-title">{{ item.title }}</h3>
              <p class="demo-item-desc">{{ item.desc }}</p>
              <p class="demo-item-tag">
                <el-tag v-for="subItem in item.category">{{ subItem }}</el-tag>
              </p>
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
import { useRouter } from "vue-router";
import { getDemoLists } from "../../api/demo";

interface listsItem {
  _id: string;
  title: string;
  desc: string;
  imgUrl: string;
  time: string;
  category: string[];
  fileName: string;
}
const router = useRouter();
const demoDefault = ref("/src/assets/images/demo/demo-default.png");
const loading = ref(true);
const state = reactive({
  lists: [] as listsItem[],
});

onMounted(() => {
  getLists();
});

const getLists = () => {
  getDemoLists().then((res: any) => {
    const { code, data } = res;
    if (code === 200 || code === "200") {
      state.lists = data;
    }
    setTimeout(() => {
      loading.value = false;
    }, 500);
  });
};

const goDetail = (fileName: string) => {
  const pageHref = router.resolve({
    path: "/demo-repl",
    query: {
      fileName,
    },
  });

  window.open(pageHref.href, "_blank");
  
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
.demo-container {
  background: var(--bgColor, #f0f4f3);
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
    .demo-header-sub-txt {
      color: #fff;
      font-size: 18px;
      opacity: 0.8;
    }
  }
  .demo-content {
    width: 85%;
    margin: 50px auto;
    min-height: 600px;
    display: flex;
    flex-wrap: wrap;
    .demo-item {
      padding: 5px;
      margin: 0 2.5% 50px 0;
      width: 31%;
      height: 400px;
      background: #fff;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: var(--boxShadow, 0 2px 16px 0px #cecece);
      box-sizing: border-box;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:hover {
        cursor: pointer;
        transform: translateY(-3px);
        transition: all 0.4s;
      }
      ::v-deep .demo-item-img {
        width: 100%;
        height: 220px;
        img {
          object-fit: cover;
        }
      }
      .demo-item-content {
        padding: 7px;
        .demo-item-title {
          color: $mainTxtColor;
          font-size: 22px;
        }
        .demo-item-desc {
          color: $mainsSubTxtColor;
          margin: 7px 0;
          height: 48px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .demo-item-tag {
          height: 30px;
          margin-bottom: 3px;
          span {
            margin-right: 7px;
            border-style: dashed;
            background: rgba(211, 129, 189, 0.2) !important;
            color: rgba(211, 129, 189, 1) !important;
            border-color: rgba(211, 129, 189, 0.5) !important;
          }
        }
        .demo-item-time {
          margin-left: 3px;
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
