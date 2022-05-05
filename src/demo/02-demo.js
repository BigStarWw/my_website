const demo = `<template>
<div class="box" :style="'background: url('+ bgImgUrl +')no-repeat center'">
    <div class="img1 img"><img :src="imgUrl"></div>
    <div class="img2 img"></div>
</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const imgUrl = 'http://118.178.240.175/group1/M00/00/00/rBKIjWJzQXeACG0iAAOc7nUXxZ4943.png'
const bgImgUrl = 'http://118.178.240.175/group1/M00/00/00/rBKIjWJzQZ2APaYkAAEkA4gTaio666.jpg'

onMounted(() => {
    transformAnimate()
});
const transformAnimate = () => {
    let dom = document.getElementsByClassName('box')[0]
    let domImg1 = document.getElementsByClassName('img1')[0]
    let domImg2 = document.getElementsByClassName('img2')[0]
    let moveCenterX = dom.offsetWidth / 2;
    let moveCenterY = dom.offsetHeight / 2;

    dom.onmousemove = function (e) {
        let moveX = (e.clientY - moveCenterY) / 200
        let moveY = (e.clientX - moveCenterX) / 200
        dom.style.transform = 'perspective(400px) rotateX(' + moveX +'deg) rotateY(' + moveY +'deg)'
        domImg1.style.transform = 'translate(' + moveX * 20 +'px,' + moveY +'px)'
        domImg2.style.transform = 'translate(' + -(moveX * 20) +'px,' + -(moveY) +'px)'
    }
    dom.onmouseout = function (e){
        dom.style.transform = 'perspective(400px) rotateX(' + 0 +'deg) rotateY(' + 0 +'deg)'
        domImg1.style.transform = 'translateX(' + 0 +'px) translateY(' + 0 +'px)'
        domImg2.style.transform = 'translateX(' + 0 +'px) translateY(' + 0 +'px)'
    }
}

<\/script>
<style>
.box{
    min-width: 50%;
    height: 320px;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    position: relative;
}
.img{
    position: absolute;
    width: 400px;
    height: 250px;
}
.img img{
    width: 100%;
    height: 100%;
}
.img1{
    top: 12%;
    left: 35%;
}
.img2{
    top: 25%;
    left: 60%;
}
</style>
`;
export default demo;
