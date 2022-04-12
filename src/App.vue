<template>
  <div class="app-container">
    <base-header></base-header>
    <div class="main-container"><router-view></router-view></div>
    <base-footer></base-footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "@/assets/styles/theme.scss";
@import "@/assets/iconfont/iconfont.css";
@import "@/assets/styles/common.scss";
.app-container {
  height: 100%;
  background: url("./assets/images/bg.jpg") no-repeat center;
  background-size: 100% 100%;
}
.main-container {
  position: relative;
  top: 60px;
}
</style>
