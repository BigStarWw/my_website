<template>
  <div class="about-skill-container">
    <div class="about-skill-bg-txt" style="right: -5%; top: 5%">web</div>
    <div class="about-skill-bg-txt" style="right: -5%; top: 25%">skills</div>
    <div class="about-skill-bg-txt" style="right: -5%; top: 45%">
      professional
    </div>
    <div class="about-skill-content">
      <p
        class="about-skill-item flex-center"
        :style="
          'left: ' +
          ((index % 5) + index / 11) * (num - 0.4) +
          'rem; top: ' +
          (index / 5) * num +
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
import { ref, reactive } from "vue";
const txtArr = reactive<string[]>([
  "HTML5",
  "CSS3",
  "Js",
  "Vue",
  "React",
  "Scss",
  "Less",
  "Jquery",
  "Svg",
  "Ts",
  "Git",
  "Node",
  "koa",
  "Express",
  "Nginx",
  // "Epg"
]);
const num = ref(1.5);
if (window.innerWidth < 540) num.value = 1.9;
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
    font-size: 0.7rem;
    font-weight: bold;
    color: var(--textColor, #dadada);
    opacity: var(--aboutSkillOpacity, 0.5);
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

@media screen and (max-width: 540px) {
  .about-skill-container {
    width: 90%;
    .about-skill-bg-txt {
      font-size: 1.2rem !important;
    }
    .about-skill-bg-txt {
      &:nth-child(2) {
        top: 40% !important;
      }
      &:nth-child(3) {
        top: 75% !important;
      }
    }
    .about-skill-item {
      width: 220px !important;
      height: 220px !important;
      font-size: 12px !important;
    }
  }
}
</style>
