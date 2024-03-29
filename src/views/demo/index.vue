<template>
  <div class="demo-container">
    <div class="demo-header flex-center">
      <p class="demo-header-txt">Demo</p>
      <p class="demo-header-sub-txt">
        这个版块主要是展示一些学习、开发过程中总结的“花里胡哨”的demo；
        主要是记录和总结，如果能给开发的朋友们提供一些思路也是极好滴。
      </p>
    </div>
    <div class="demo-content">
      <el-skeleton
        class="demo-skeleton"
        :loading="loading"
        animated
        v-for="(item, index) in state.lists"
      >
        <template #template>
          <el-skeleton-item
            class="demo-item-img"
            variant="image"
            style="width: 100%"
          />
          <div style="padding: 7px">
            <el-skeleton-item
              class="demo-item-title"
              variant="h3"
              style="width: 50%"
            />
            <el-skeleton-item
              variant="p"
              style="width: 100%; margin: 7px 0 0.07rem 0"
            />
            <el-skeleton-item
              variant="p"
              style="width: 100%; margin: 7px 0 0.07rem 0"
            />
            <el-skeleton-item
              class="demo-item-time"
              variant="p"
              style="width: 50%"
            />
          </div>
        </template>
        <template #default>
          <div class="demo-item" @click="goDetail(item.fileName)">
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
      font-size: 0.38rem;
      font-style: italic;
      font-weight: bold;
    }
    .demo-header-sub-txt {
      color: #fff;
      font-size: 0.1rem;
      opacity: 0.8;
    }
  }
  .demo-content {
    width: 85%;
    margin: 50px auto;
    min-height: calc(100vh - 440px);
    display: flex;
    flex-wrap: wrap;
    .demo-item,
    .demo-skeleton {
      padding: 5px;
      margin: 0 2.5% 50px 0;
      width: 31%;
      min-height: 400px;
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
      :deep(.demo-item-img) {
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
          font-size: 0.13rem;
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
  }
}

@media screen and (max-width: 960px) {
  .demo-header {
    height: 750px !important;
    .demo-header-txt {
      margin-bottom: 50px;
      font-size: 18px !important;
    }
    .demo-header-sub-txt {
      width: 80%;
      font-size: 12px !important;
    }
  }
  .demo-content {
    .demo-item,
    .demo-skeleton {
      width: 84% !important;
      min-height: 400px !important;
      margin: 10px auto !important;
      :deep(.demo-item-img) {
        height: 420px !important;
      }
      .demo-item-title {
        font-size: 14px !important;
      }
      .demo-item-desc {
        font-size: 12px !important;
        min-height: 180px !important;
      }
      .demo-item-tag {
        min-height: 90px !important;
        .el-tag {
          height: 100%;
        }
      }
    }
  }
}
</style>
