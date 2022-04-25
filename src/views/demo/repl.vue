<template>
  <div class="demo-repl-container">
    <Repl :store="store" :showCompileOutput="false" :showImportMap="false" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Repl, ReplStore } from "@vue/repl";
import "@vue/repl/style.css";
import demo from '@/demo/01-demo.js'

let welcomeCode = demo;
const defaultMainFile = "App1.vue";
const store = new ReplStore();

store.setFiles({ "App.vue": welcomeCode });

</script>
<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
.demo-repl-container {
  margin-top: 60px;
  height: calc(100vh - 160px);
  .vue-repl{
    height: 100%;
    --color-branding: #d381bd;
    --color-branding-dark: #d381bd;
    --header-height: 50px;
  }
}
</style>
