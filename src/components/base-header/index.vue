<template>
  <header
    class="base-header-container"
    :class="
      (!isHomePage && appEleScrollTop > 10) || isDemoReplPage
        ? 'base-header-float'
        : ''
    "
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
        <i class="iconfont" :class="icon" @click="switchTheme"></i>
        <!-- <i class="iconfont icon-baitian"></i> -->
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseHeader",
  data() {
    return {
      isHomePage: true,
      isDemoReplPage: false,
      isDark: false,
      appEleScrollTop: 0,
      aboutMeTargetDistance: 0,
      bodyEle: {} as HTMLBodyElement
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.isHomePage = route.path === "/home";
        this.isDemoReplPage = route.path === "/demo-repl";

        this.initTheme()
      },
    },
  },
  computed: {
    icon():string {
      return this.isDark ? "icon-yejian2 dark-icon" : "icon-A";
    },
  },
  mounted() {
    const appEle = document.getElementById("app-container") as HTMLElement;
    appEle.addEventListener("scroll", this.onScroll);
    this.bodyEle = document.getElementsByTagName("body")[0]
    this.initTheme()
  },
  beforeUnmount() {
    const appEle = document.getElementById("app-container") as HTMLElement;
    appEle.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    initTheme() {
      this.isDark = localStorage.getItem("theme") === 'darkTheme' || false
      this.isDark ? this.bodyEle.classList.add('dark') : this.bodyEle.classList.remove('dark')
    },
    onScroll() {
      const appEle = document.getElementById("app-container") as HTMLElement;
      this.appEleScrollTop = appEle.scrollTop;
    },
    switchTheme() {
      this.isDark = !this.isDark
      // 切换主题
      this.bodyEle.classList.toggle('dark')
      // 并且保存于localstorage中
      localStorage.setItem("theme", this.isDark ? 'darkTheme' : '')
    }
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
        position: relative;
        &::before,
        &::after {
          display: block;
          content: "";
          position: absolute;
          left: 50%;
          bottom: -3px;
          width: 0;
          height: 1px;
          background-color: #fff;
          transition: all 0.2s;
        }
        &:hover {
          &::before {
            left: 0;
            width: 50%;
          }
          &::after {
            width: 50%;
          }
        }
        a {
          text-decoration: none;
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
  background: var(--bgColor, #fff);
  box-shadow: 0 -6px 11px 0px $mainTxtColor;
  color: var(--textColor, $mainTxtColor);
  .base-header-right {
    .nav {
      li {
        a {
          color: var(--textPurplePinkColor, $mainTxtColor);
        }
      }
    }
    .switch-theme-box {
      i {
        color: var(--textPurplePinkColor, $mainTxtColor);
      }
    }
  }
}
</style>
