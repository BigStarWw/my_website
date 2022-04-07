<template>
    <div class="home-container" >
        home
        <div id="atest-aaa">test</div>
        <div class="test home-box">test</div>

        <el-button type="primary">Primary</el-button>
        <i class="iconfont icon-star"></i>
        <div>test</div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, getCurrentInstance, ComponentInternalInstance } from 'vue';
onMounted(() => {
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    const { proxy } = getCurrentInstance() as any
})

</script>
<style lang="scss" scoped>
    .home-container{
        background-color: goldenrod;
        font-size: 30px;
        border-right: solid 20px #ddd; 
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