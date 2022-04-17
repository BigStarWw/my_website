<template>
  <header class="base-header-container">
    <div class="base-header-left"></div>
    <div class="base-header-right">
      <nav class="nav">
        <ul>
          <li>首页</li>
          <li>关于我</li>
          <li>小插件demo</li>
        </ul>
      </nav>

      <div class="switch-theme-box">
        <!-- <i class="iconfont icon-yejian dark-icon"></i> -->
        <i
          v-show="isDark"
          class="iconfont icon-yejian2 dark-icon"
          @click="() => (isDark = !isDark)"
        ></i>
        <i
          v-show="!isDark"
          class="iconfont icon-A"
          @click="() => (isDark = !isDark)"
        ></i>
        <!-- <i class="iconfont icon-baitian"></i> -->
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "BaseHeader",
  props: {},
  setup(props, context) {
    const isDark = ref<boolean>(false);

    return {
      isDark,
    };
  },
});
</script>

<style scoped lang="scss">
.base-header-container {
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;
  height: 60px;
  box-sizing: border-box;
  .base-header-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav {
      margin-right: 20px;
      // border-right: solid 1px #fff;
      ul{
        display: flex;
        margin: 0;
      }
      li{
        margin: 0 16px;
        height: 20px;
        line-height: 20px;
        box-sizing: border-box;
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        &:hover{
          color: #fff;
          border-bottom: solid 2px #fff;
          transition: border .2s;
        }
        
      }
    }
    .switch-theme-box {
      i{
        font-size: 32px;
        color: #fff;
        cursor: pointer;
      }
      i.dark-icon {
      }
    }
  }
}
</style>
