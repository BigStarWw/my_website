<template>
  <div class="app-container" id="app-container">
    <base-header></base-header>
    <div class="main-container"><router-view></router-view></div>
    <base-footer></base-footer>
    <base-toolbar></base-toolbar>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "@/assets/styles/animation.scss";
@import "@/assets/styles/theme.scss";
@import "@/assets/iconfont/iconfont.css";
@import "@/assets/styles/common.scss";
.app-container {
  height: 100%;
  overflow-y: auto;
  background-color: var(--bgColor, #fff);
  &::-webkit-scrollbar {
    width: 6px; //对垂直方向滚动条
    height: 6px; //对水平方向滚动条
  }

  //滚动的滑块
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #0003; //滚动条的颜色
  }
}
</style>
