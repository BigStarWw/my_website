<template>
  <header
    class="base-header-container"
    :class="!isHomePage && appEleScrollTop > 10 || isDemoReplPage ? 'base-header-float' : ''"
  >
    <div class="base-header-left"></div>
    <div class="base-header-right">
      <nav class="nav">
        <ul>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/about">关于我</router-link></li>
          <li><router-link to="/demo">小插件demo</router-link></li>
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
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseHeader",
  props: {},
  data() {
    return {
      isHomePage: true as boolean,
      isDemoReplPage: false as boolean,
      appEleScrollTop: 0 as number,
      aboutMeTargetDistance: 0 as number,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.isHomePage = route.path === "/home";
        this.isDemoReplPage = route.path === "/demo-repl"
      },
    },
  },
  mounted() {
    const appEle = document.getElementById("app-container") as HTMLElement;
    appEle.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    const appEle = document.getElementById("app-container") as HTMLElement;
    appEle.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const appEle = document.getElementById("app-container") as HTMLElement;
      this.appEleScrollTop = appEle.scrollTop;
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/variable.scss";
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
      ul {
        display: flex;
        margin: 0;
      }
      li {
        margin: 0 16px;
        height: 20px;
        line-height: 20px;
        box-sizing: border-box;
        cursor: pointer;

        &:hover {
          color: #fff;
          border-bottom: solid 2px #fff;
          transition: border 0.2s;
        }
        a {
          color: #fff;
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
    .switch-theme-box {
      i {
        font-size: 32px;
        color: #fff;
        cursor: pointer;
      }
      i.dark-icon {
      }
    }
  }
}

.base-header-float {
  background: #fff;
  box-shadow: 0 -6px 11px 0px $mainTxtColor;
  color: $mainTxtColor;
  .base-header-right {
    .nav {
      li {
        a {
          color: $mainTxtColor;
        }
      }
    }
    .switch-theme-box {
      i {
        color: $mainTxtColor;
      }
    }
  }
}
</style>
