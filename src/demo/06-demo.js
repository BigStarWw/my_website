const demo = `<template>
<canvas id="canvas" ref="canvasImg"> </canvas>

</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const canvasImg: any = ref();
const image: HTMLImageElement = new Image();
const imgUrl = 'http://118.178.240.175/group1/M00/00/00/rBKIjWK4MP2AdLl1AAH68L7Mooc099.png'

onMounted(() => {
  init1();
});

const init1 = () => {
  let ctx = canvasImg.value.getContext("2d");

  image.src = imgUrl;
  image.onload = function () {
    // 给canvas赋值图片的宽和高
    canvasImg.value.width = image.width;
    canvasImg.value.height = image.height;

    // canvas里面绘制图片
    ctx.drawImage(image, 0, 0);
    setTimeout(()=>{
      imagePointInfo();
    }, 100)
   
  };
};
const imagePointInfo = () => {
  let ctx = canvasImg.value.getContext("2d");
  let imageData = ctx.getImageData(0, 0, image.width, image.height).data;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, image.width, image.height);

  let gap = 5;
  let n = 0;

  for (let h = 0; h < image.height; h += gap) {
    for (let w = 0; w < image.width; w += gap) {
      let position = (image.width * h + w) * 4;
      let r = imageData[position],
        g = imageData[position + 1],
        b = imageData[position + 2];

      if (r + g + b == 0 || (r >= 0 && r < 240)) {
        ctx.fillStyle = 'rgba(' + (n + h / 1.25) / 1.4 + ',' + n + ',' + w + ',.9)';
        ctx.fillRect(w, h, 4, 4);
      }
    }
  }
};
<\/script>
<style>
</style>
`;
export default demo;
