<template>
    <div class="home-container" :class="isDarkTheme ? 'dark-theme' : ''">
        home
        <div id="atest-aaa">test</div>
        <div class="test home-box">test</div>

        <el-button type="primary">Primary</el-button>
        <i class="iconfont icon-star"></i>
        <div>test</div>
        <div>--------------------------------------------------------------------------------------------------------------------------------------------</div>
        <h1>主题切换测试</h1>
        <button @click="()=>isDarkTheme = !isDarkTheme">切换主题</button>
        {{isDarkTheme}}
        <div class="home-box">box1</div>
        <div class="home-txt">txt</div>

    </div>
</template>
<script setup lang="ts">
import { onMounted, getCurrentInstance, ComponentInternalInstance, ref } from 'vue';
let isDarkTheme = ref<boolean>(false)
onMounted(() => {
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    const { proxy } = getCurrentInstance() as any
    
})

</script>
<style lang="scss" scoped>
    .home-container{
        background-color: var(--color, transparent);
        font-size: 30px;
        border-right: solid 20px #ddd; 
        color: var(--text-color, #000);
        .test, 
        .test-aaa,
        .atest-aaa
        {
            color: green;
            font-size: 30px;/*no*/
            line-height: 80px;/*no*/
        }

        .home-box{
            font-size: 30px;
        }
    }       
</style>