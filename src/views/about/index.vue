<template>
  <div class="about-container">
    <div class="about-header flex-center" ref="aboutHeaderEle">
      <p class="about-header-txt">Basic Information</p>
    </div>
    <div class="about-me flex-center" ref="aboutMeEle">
      <h4 class="about-title">关于我</h4>
      <div class="about-me-content flex-center">
        <div class="about-me-pic"></div>
        <div
          class="about-me-desc"
          :style="
            appEleScrollTop > aboutMeTargetDistance - 60
              ? 'transform: translateY(' +
                -(30 - (appEleScrollTop - aboutMeTargetDistance) / 10) +
                'px);opacity:' +
                ((appEleScrollTop - aboutMeTargetDistance) / 150 > 1
                  ? 1
                  : (appEleScrollTop - aboutMeTargetDistance) / 150)
              : ''
          "
        >
          <p class="about-me-desc-txt">嗨～，我是一名94年狮子座女生</p>
          <p class="about-me-desc-txt"><span>现居：</span>四川成都</p>
          <p class="about-me-desc-txt"><span>昵称：</span>会闪的大星星</p>
          <p class="about-me-desc-txt"><span>爱好：</span>旅游、敲代码、摄影</p>
          <p class="about-me-desc-txt">
            <span>喜欢的一句话：</span>以自己喜欢的方式过一生
          </p>
        </div>
      </div>
    </div>
    <div class="about-statistic">
      <div class="statistic-box flex-center">
        <div class="statistic-icon flex-center">
          <i class="iconfont icon-l-developer"></i>
        </div>
        <p class="statistic-txt"><span>4</span>年工作经验</p>
      </div>
      <div class="statistic-box flex-center">
        <div class="statistic-icon flex-center">
          <i class="iconfont icon-xiangmu1"></i>
        </div>
        <p class="statistic-txt"><span>50+</span>个参与项目</p>
      </div>
      <div class="statistic-box flex-center">
        <div class="statistic-icon flex-center">
          <i class="iconfont icon-gongsi2"></i>
        </div>
        <p class="statistic-txt"><span>3</span>家公司</p>
      </div>
    </div>
    <div>技能</div>
    <div>爱好</div>
    <div>图片展示</div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const aboutHeaderEle = ref<HTMLElement>();
const aboutMeEle = ref<HTMLElement>();
let appEleScrollTop = ref<number>(0);
let aboutMeTargetDistance = ref<number>(0);

const onScroll = () => {
  const appEle = document.getElementById("app-container") as HTMLElement;
  let targetHeight = 1280;
  let baseNumber = 192;
  let targetDistance =
    ((targetHeight / baseNumber) * window.innerWidth) / 10 - window.innerHeight;

  appEleScrollTop.value = appEle.scrollTop;
  aboutMeTargetDistance.value = targetDistance;
};

onMounted(() => {
  const appEle = document.getElementById("app-container") as HTMLElement;
  appEle.addEventListener("scroll", onScroll);
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
.about-container {
  width: 100%;
  height: 2000px;
  // 公共样式
  .about-title {
    color: #3b3e4b;
    font-size: 40px;
    margin-bottom: 80px;
    position: relative;
    &:before {
      width: 30%;
      height: 2px;
      background-color: #d381bd;
      content: "";
      display: block;
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .about-header {
    height: 680px;
    background: url("@/assets/images/about/bg5.jpg") no-repeat center;
    background-size: cover;
    position: relative;
    &::before {
      width: 100%;
      height: 100%;
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      opacity: 0.1;
      background: linear-gradient(to right bottom, #323232, #030d71 70px);
    }
    .about-header-txt {
      color: #fff;
      font-size: 100px;
      font-style: italic;
      font-weight: bold;
    }
  }

  .about-me {
    padding: 100px 0;
    .about-me-content {
      .about-me-pic {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: url("../../assets/images/about/my2.png") no-repeat center;
        background-size: cover;
        margin-bottom: 60px;
      }
      .about-me-desc {
        opacity: 0;
        .about-me-desc-txt {
          text-align: center;
          margin-bottom: 12px;
          font-size: 20px;
          color: #666;
          font-family: system-ui;

          span {
            font-size: 20px;
            color: #666;
          }
          &:first-child {
            font-size: 22px;
            color: $mainTxtColor;
            margin-bottom: 40px;
          }
        }
      }
    }
  }

  .about-statistic {
    width: 100%;
    height: 520px;
    padding: 0 20%;
    box-sizing: border-box;
    background: url("../../assets/images/about/bg11.jpg") no-repeat center;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;

    &::before {
      width: 100%;
      height: 100%;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba($color: #000000, $alpha: 0.55);
    }
    .statistic-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
       position: relative;
       z-index: 2;
      .statistic-icon {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #fff;
        text-align: center;
        margin-bottom: 60px;
       
        i {
          font-size: 52px;
          color: $mainColor;
        }
      }
      .statistic-txt{
        margin-bottom: 25px;
        color: #ccc;
        span{
          color: #fff;
          margin-right: 5px;
          font-size: 48px;
        }
      }
    }
  }
}
</style>
