<template>
  <footer
    class="base-footer-container flex-center"
    :class="isHomePage ? 'base-footer-float' : ''"
  >
    <div class="base-footer-contact flex-center">
      <div class="contact-way">Github: @BigStarWw</div>
      <div class="contact-way">邮箱: 956880047@qq.com</div>
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
  background-color: $mainTxtColor;
  .base-footer-contact {
    width: 100%;
    height: 60px;
    flex-direction: row;
    .contact-way {
      margin-right: 10px;
      color: #fff;
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
  .base-footer-contact {
    visibility: hidden;
  }
}
</style>
