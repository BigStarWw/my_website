<template>
  <footer
    class="base-footer-container flex-center"
    :class="isHomePage ? 'base-footer-float' : ''"
  >
    <div class="base-footer-content" v-show="!isHomePage">
      <div class="base-footer-links">
        <p>特别感谢以下才华横溢的创作者以及网站提供的免费素材和物料：</p>
        <div>
          <a href="https://www.pexels.com/zh-cn">Pexels</a>
          <a href="https://storyset.com/online"
            >Online illustrations by Storyset</a
          >
          <a href="https://vuejs.org">Vue</a>
          <a href="https://element-plus.org/zh-CN">Element Plus</a>
          <a href="https://koajs.com">koa</a>
          <a href="https://www.mongodb.com">MongoDB</a>
          <a href="http://nginx.org">Nginx</a>
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
@media screen and (max-width: 960px) {
  .base-footer-content{
    box-sizing: border-box;
    min-height: 280px;
    flex-direction: column;
    padding: 10px 0;
    .base-footer-links{
      width: 100%;
    }
  }
  .base-footer-copy{
    height: 60px!important;
  }
}
@media screen and (max-width: 540px) {
  .base-footer-content{
    min-height: 550px;
    .base-footer-links{
      width: 100%;
      margin-bottom: 30px;
    }
  }
  .base-footer-copy{
    margin-top: 30px;
    height: 100px!important;
  }
}
</style>
