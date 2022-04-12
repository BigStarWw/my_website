<template>
    <footer class="base-footer-container">
      <div></div>
      <div class="base-footer-copy">
        Copyright&copy; 2022 会闪的大星星, all rights reserved.
      </div>
    </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseFooter',
  props: {
    
  }
})
</script>
<style scoped lang="scss">
    .base-footer-container{
      display: flex;
      align-items: center;
      justify-content: center;
      .base-footer-copy{
        color: #fff;
      }
    }
</style>