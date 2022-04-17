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
 
}
.main-container {
   // height: 100%;
}
</style>
