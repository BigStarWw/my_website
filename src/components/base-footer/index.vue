<template>
  <footer
    class="base-footer-container flex-center"
    :class="isHomePage ? 'base-footer-float' : ''"
  >
    <div class="base-footer-content" v-show="!isHomePage">
      <div class="base-footer-links">
        <p>特别感谢以下网站提供的免费素材：</p>
        <div>
          <a href="https://www.pexels.com/zh-cn/">pexels</a>
          <a href="https://storyset.com/online"
            >Online illustrations by Storyset</a
          >
        </div>
      </div>
      <div class="base-footer-contact flex-center">
        <div class="contact-way"><a href="https://github.com/BigStarWw/my_website/tree/dev">Github: @BigStarWw</a></div>
        <div class="contact-way">邮箱: 956880047@qq.com</div>
      </div>
    </div>

    <div class="base-footer-copy">
      Copyright&copy; 2022 会闪的大星星，all rights reserved.
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseFooter",
  props: {},
  data() {
    return {
      isHomePage: true,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.isHomePage = route.path === "/home";
      },
    },
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/variable.scss";
.base-footer-container {
  width: 100%;
  background-color:  var(--footerBgColor, $mainTxtColor);
  .base-footer-content {
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .base-footer-links {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p,
      a {
        color: #fff;
        margin-bottom: 10px;
      }
      a {
        margin: 0 20px;
        display: inline-block;
      }
    }
    .base-footer-contact {
      width: 100%;
      height: 60px;
      flex-direction: row;
      .contact-way {
        margin-right: 10px;
        color: #fff;
        a{
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
  .base-footer-copy {
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 100%;
    color: #fff;
  }
}

.base-footer-float {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
}
</style>
