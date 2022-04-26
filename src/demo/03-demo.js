const demo = `<template>
<div class="container">
    <div class="wrapper">
        <div class="box1">
            <img src="/src/assets/images/demo/element/star1.png">
        </div>
        <div class="box2">
            <img src="/src/assets/images/demo/element/star2.png">
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
    scroll()
});
const scroll = () => {
    let dom = document.getElementsByClassName('wrapper')[0];
    let domTop = dom.offsetTop; // 父元素到顶部的距离
    let height = dom.offsetHeight; // 父元素的高度
    let targetDom = document.getElementsByClassName('box2')[0];

    document.addEventListener('scroll',function () {
        if( document.documentElement.scrollTop < (( domTop / 2) + height)){
            targetDom.style.height = document.documentElement.scrollTop   + 'px'
        }
    })
}

<\/script>
<style scoped>
.container{
    height: 900px;
}
.wrapper{
    margin-top: 200px;
    width: 200px;
    height: 100px;
    position: relative;
    left: calc(50% - 100px);
}
.box1,.box2{
    width: 100%;
}
.box1 img,.box2 img{
    width: 100%;
}
.box1{
    height: 100%;
}
.box2{
    overflow: hidden;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .1s;
}
</style>
`;
export default demo;
