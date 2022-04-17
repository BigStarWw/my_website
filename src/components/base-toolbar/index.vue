<template>
  <div class="base-toolbar-container">
    <div class="to-top-box" @click="onScrollToTop" v-show="isShow">
      <img src="@/assets/images/rocket.png" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
export default defineComponent({
  name: "BaseToolbar",
  props: {},

  setup(props, context) {
    let isShow = ref<boolean>(false);
  
    // 滚动到顶部
    const onScrollToTop = () => {
      const appEle = document.getElementById("app-container") as HTMLElement;
      let timer: any = setInterval(() => {
        if (appEle.scrollTop <= 0) {
          appEle.scrollTop = 0;
          clearInterval(timer);
        }
        appEle.scrollTop -= 20;
      }, 10);
    };

    const switchRocketShow = () => {
      const appEle = document.getElementById("app-container") as HTMLElement;
      if (appEle.scrollTop > 100) {
        isShow.value = true;
      } else {
        isShow.value = false;
      }
    };

    onMounted(() => {
      const appEle = document.getElementById("app-container") as HTMLElement;
      appEle.addEventListener('scroll', switchRocketShow);
    });

    onBeforeUnmount(() => {
      const appEle = document.getElementById("app-container") as HTMLElement;
      appEle.removeEventListener('scroll', switchRocketShow);
    })

    return {
      isShow,
      onScrollToTop,
    };
  },
});
</script>

<style scoped lang="scss">
.base-toolbar-container {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .to-top-box {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      height: 60px;
    }
  }
}
</style>
