<template>
  <div class="demo-repl-container">
    <Repl
      :store="store"
      :showCompileOutput="false"
      :showImportMap="true"
      :clearConsole="false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Repl, ReplStore, compileFile, File } from "@vue/repl";
import { useRoute } from 'vue-router'
import "@vue/repl/style.css";

const route = useRoute()
const fileName = route.query.fileName || '01-demo'
const store = new ReplStore();
const demoCode = ref("");
const getDemoCode = async () => {
  const codeModule = await import(`../../demo/${fileName}.js`);
  demoCode.value = codeModule.default;
  store.setFiles({ "App.vue": demoCode.value });
  setTimeout(() => {
    store.setImportMap({
      imports: {
        vue: "https://unpkg.com/@vue/runtime-dom@3.2.31/dist/runtime-dom.esm-browser.js",
        echarts: "https://unpkg.com/echarts/dist/echarts.esm.js", // node_modules下面dist目录下的文件路径
        "element-plus":
          "https://cdn.jsdelivr.net/npm/element-plus@latest/dist/index.full.min.mjs",
      },
    });
  }, 10);
};

onMounted(() => {
  getDemoCode()
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
.demo-repl-container {
  margin-top: 60px;
  height: calc(100vh - 220px);
  .vue-repl {
    height: 100%;
    --color-branding: #d381bd;
    --color-branding-dark: #d381bd;
    --header-height: 50px;
  }
}
</style>
