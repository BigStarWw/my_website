<template>
  <div class="about-skill-container">
    <div class="about-skill-bg-txt" style="right: -5%; top: 5%">web</div>
    <div class="about-skill-bg-txt" style="right: -5%; top: 25%">skills</div>
    <div class="about-skill-bg-txt" style="right: -5%; top: 45%">professional</div>
    <div class="about-skill-content">
      <p
        class="about-skill-item flex-center"
        :style="
          'left: ' +
          ((index % 5) + index / 11) * 1.1 +
          'rem; top: ' +
          (index / 5) * 1.5 +
          'rem'
        "
        v-for="(item, index) in txtArr"
        :key="index"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const txtArr = reactive<string[]>([
  "HTML5",
  "CSS3",
  "Javascript",
  "Vue",
  "React",
  "Scss",
  "Less",
  "Jquery",
  "Svg",
  "Typescript",
  "Git",
  "Node",
  "koa",
  // "Express",
  "MongoDB",
  "Nginx",
  // "Epg"
]);
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
.about-skill-container {
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .about-skill-bg-txt {
    position: absolute;
    text-align: right;
    font-size: 160px;
    font-weight: bold;
    color: var(--textColor, #dadada);
    opacity: var(--aboutSkillOpacity, .5);
  }
  .about-skill-content {
    box-sizing: border-box;
    position: relative;
    .about-skill-item {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      box-shadow: 8px 24px 30px -12px #5f4775;
      background: linear-gradient(
        to right bottom,
        rgba(238, 207, 70, 0.7),
        $mainColor 80px
      );
      position: absolute;
      color: #fff;
    }
  }
}
</style>
