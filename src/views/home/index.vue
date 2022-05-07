<template>
  <div class="home-container" :class="isDarkTheme ? 'dark-theme' : ''">
    <div class="hello-word">
      Hi,
      <span>I am a front-end developer.</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  onMounted,
  getCurrentInstance,
  ComponentInternalInstance,
  ref,
} from "vue";

let isDarkTheme = ref<boolean>(false);
onMounted(() => {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const { proxy } = getCurrentInstance() as any;
});
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/bg.jpg") no-repeat center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  .hello-word {
    margin: 0.85rem 0 56px 0;
    font-size: 160px;
    span{
        font-size: 38px; 
        margin-left: 20px;
        letter-spacing: 1px;
    }
    
  }
}

@media screen and (max-width: 960px) {
  .home-container{
    background-size: cover;
    .hello-word{
      margin-top: 10vh;
    }
  }
}
@media screen and (max-width: 640px) {
  .home-container{
    .hello-word{
      margin-top: 50%;
    }
  }
}
</style>
