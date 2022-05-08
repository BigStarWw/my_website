<template>
  <div class="about-container">
    <div class="about-header flex-center" ref="aboutHeaderEle">
      <p class="about-header-txt">Basic Information</p>
    </div>
    <div class="about-me flex-center" ref="aboutMeEle">
      <h4 class="about-title">关于我</h4>
      <div
        class="about-me-content flex-center"
        :style="
          'transform: translateY(' + -(30 - appEleScrollTop / 15) + 'px);'
        "
      >
        <div class="about-me-pic"></div>
        <div class="about-me-desc">
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
        <p class="statistic-txt"><span>30+</span>个参与项目</p>
      </div>
      <div class="statistic-box flex-center">
        <div class="statistic-icon flex-center">
          <i class="iconfont icon-gongsi2"></i>
        </div>
        <p class="statistic-txt"><span>3</span>家公司</p>
      </div>
    </div>
    <div class="about-skill flex-center">
      <h4 class="about-title">技能</h4>
      <AboutSkill></AboutSkill>
    </div>
    <div class="about-hobbies flex-center">
      <h4 class="about-title">兴趣爱好</h4>
      <div class="about-hobbies-content">
        <div class="about-hobbies-box about-hobbies-travel">
          <img
            class="bigger"
            src="../../assets/images/about/travel/travel01.jpeg"
          />
          <el-image
            class="smaller"
            lazy
            :key="imgUrls[0]"
            :src="imgUrls[0]"
            :style="
              appEleScrollTop > aboutHobbiesScrollDistance + 100
                ? 'transform: translateY(' +
                  -(30 - (appEleScrollTop - aboutHobbiesScrollDistance) / 10) +
                  'px);'
                : ''
            "
          />
          <div
            class="about-hobbies-title"
            :class="
              appEleScrollTop > aboutHobbiesScrollDistance + 100
                ? 'titleAnimation'
                : ''
            "
          >
            <span class="about-hobbies-txt">旅行</span>
          </div>
        </div>
        <div class="about-hobbies-box about-hobbies-code">
          <el-image
            class="smaller"
            lazy
            :key="imgUrls[1]"
            :src="imgUrls[1]"
            :style="
              appEleScrollTop > aboutHobbiesScrollDistance + 350
                ? 'transform: translateY(' +
                  -(30 - (appEleScrollTop - aboutHobbiesScrollDistance) / 10) +
                  'px);'
                : ''
            "
          />
          <el-image class="bigger" :key="imgUrls[2]" :src="imgUrls[2]" lazy />
          <div
            class="about-hobbies-title"
            :class="
              appEleScrollTop >
              aboutHobbiesScrollDistance + (isSmallScreen ? 100 : 1000)
                ? 'titleAnimation'
                : ''
            "
          >
            <span class="about-hobbies-txt">开发</span>
          </div>
        </div>

        <div class="about-hobbies-box about-hobbies-photography">
          <el-image class="bigger" :key="imgUrls[3]" :src="imgUrls[3]" lazy />
          <el-image
            class="smaller"
            lazy
            :key="imgUrls[4]"
            :src="imgUrls[4]"
            :style="
              appEleScrollTop > aboutHobbiesScrollDistance + 500
                ? 'transform: translateY(' +
                  -(30 - (appEleScrollTop - aboutHobbiesScrollDistance) / 10) +
                  'px);'
                : ''
            "
          />
          <div
            class="about-hobbies-title"
            :class="
              appEleScrollTop >
              aboutHobbiesScrollDistance + (isSmallScreen ? 100 : 1900)
                ? 'titleAnimation'
                : ''
            "
          >
            <span class="about-hobbies-txt">摄影</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import AboutSkill from "./components/about-skill.vue";

const imgUrls = [
  new URL("../../assets/images/about/travel/travel02.jpeg", import.meta.url)
    .href,
  new URL("../../assets/images/about/code/code01.jpg", import.meta.url).href,
  new URL("../../assets/images/about/code/code02.jpg", import.meta.url).href,
  new URL("../../assets/images/about/photography/pic01.jpeg", import.meta.url)
    .href,
  new URL("../../assets/images/about/photography/pic02.jpeg", import.meta.url)
    .href,
];
const aboutHeaderEle = ref<HTMLElement>();
const aboutMeEle = ref<HTMLElement>();
let appEleScrollTop = ref<number>(0);
let aboutMeTargetDistance = ref<number>(0);
let aboutHobbiesScrollDistance = ref<number>(0);
const isSmallScreen = ref(false);
if (window.innerWidth < 540) isSmallScreen.value = true;

onMounted(() => {
  const appEle = document.getElementById("app-container") as HTMLElement;
  appEle.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
  const appEle = document.getElementById("app-container") as HTMLElement;
  appEle.removeEventListener("scroll", onScroll);
});

const getTargetDynamicDistance = (height: number): number => {
  let baseNumber = 192;
  return ((height / baseNumber) * window.innerWidth) / 10 - window.innerHeight;
};

const onScroll = () => {
  const appEle = document.getElementById("app-container") as HTMLElement;
  const aboutMeTargetHeight = 1280;
  const aboutHobbiesTargetHeight = 3600;

  appEleScrollTop.value = appEle.scrollTop;
  aboutMeTargetDistance.value = getTargetDynamicDistance(aboutMeTargetHeight);
  aboutHobbiesScrollDistance.value = getTargetDynamicDistance(
    aboutHobbiesTargetHeight
  );
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
.about-container {
  width: 100%;
  // 公共样式
  .about-title {
    color: var(--textColor, #3b3e4b);
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
    background: url("@/assets/images/about/bg.jpg") no-repeat center;
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
      background: linear-gradient(
        to right bottom,
        #323232,
        var(--aboutHeaderColor, #030d71) 70px
      );
    }
    .about-header-txt {
      color: #fff;
      font-size: 0.6rem;
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
        background: url("../../assets/images/about/my.jpeg") no-repeat center;
        background-size: cover;
        margin-bottom: 60px;
        box-shadow: var(--boxShadow, 0 2px 16px 0px #b4b4b4);
      }
      .about-me-desc {
        .about-me-desc-txt {
          text-align: center;
          margin-bottom: 12px;
          font-size: 0.11rem;
          color: var(--textColor, #666);
          font-family: system-ui;
          span {
            font-size: 0.11rem;
            color: var(--textColor, #666);
          }
          &:first-child {
            font-size: 0.13rem;
            color: var(--textColor, $mainTxtColor);
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
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
        background: linear-gradient(to right bottom, #fff, #ededed 180px);
        text-align: center;
        margin-bottom: 60px;
        i {
          font-size: 0.34rem;
          color: $mainColor;
        }
      }
      .statistic-txt {
        margin-bottom: 25px;
        color: #ccc;
        font-size: 0.1rem;
        span {
          color: $mainColor;
          margin-right: 5px;
          font-size: 0.24rem;
        }
      }
    }
  }

  .about-skill {
    padding: 100px 0;
    height: 1100px;
  }

  .about-hobbies {
    width: 100%;
    padding: 100px 0;
    .about-hobbies-content {
      position: relative;

      .about-hobbies-box {
        position: relative;
        margin-bottom: 600px;
        :deep(.el-image) {
          border-radius: 5px;
          object-fit: cover;
          position: relative;
          box-shadow: var(--boxShadow, 4px 5px 6px 0px #757575);
        }
        :deep(img) {
          border-radius: 5px;
          object-fit: cover;
          position: relative;
          box-shadow: var(--boxShadow, 4px 5px 6px 0px #757575);
        }
        .bigger {
          width: 1000px;
          height: 700px;
          position: relative;
          z-index: 3;
        }
        .smaller {
          width: 550px;
          height: 380px;
          position: relative;
          z-index: 2;
        }
        .about-hobbies-title {
          width: 250px;
          position: absolute;
          top: 50px;
          z-index: 1;
          .about-hobbies-txt {
            display: inline-block;
            font-size: 0.2rem;
            color: var(--textGrayColor, $mainTxtColor);
            opacity: 0;
          }
          &::after {
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 1px;
            content: "";
            display: block;
            background-color: $mainTxtColor;
            transform: translateX(-100%);
          }
        }
      }

      .about-hobbies-travel {
        .bigger {
          z-index: 2;
          transform: rotate(-1deg);
        }
        .smaller {
          z-index: 3;
          left: -100px;
          top: 200px;
        }
        .about-hobbies-title {
          text-align: right;
          left: 1000px;
          top: 50px;
        }
      }

      .about-hobbies-code {
        .bigger {
          top: 50px;
          transform: rotate(3deg);
          object-fit: cover;
        }
        .smaller {
          left: 50px;
          top: 100px;
          transform: rotate(-8deg);
        }
        .about-hobbies-title {
          right: 1100px;
          top: 50px;
          &::after {
            transform: translateX(120%);
          }
        }
      }

      .about-hobbies-photography {
        .bigger {
          transform: rotate(-2deg);
        }
        .smaller {
          width: 650px;
          height: 550px;
          left: -120px;
          top: 50px;
        }
        .about-hobbies-title {
          text-align: right;
          left: 1000px;
          top: 50px;
        }
      }
    }
  }
}

.titleAnimation {
  .about-hobbies-txt {
    animation: titleTxtAnimation 1s 0.9s;
    animation-fill-mode: forwards;
  }

  &::after {
    animation: titleLineAnimation 1.2s 0.1s;
    animation-fill-mode: forwards;
  }
}
.about-hobbies-code {
  .titleAnimation {
    &::after {
      animation: titleLineAnimationToRight 1.2s 0.1s;
      animation-fill-mode: forwards;
    }
  }
}

@media screen and (max-width: 960px) {
  .about-title {
    visibility: hidden;
  }
  .about-statistic {
    padding: 0 5% !important;
  }
  .statistic-icon {
    width: 180px !important;
    height: 180px !important;
  }
  .about-me-desc-txt,
  .about-me-desc-txt span {
    opacity: 0.7;
  }
  .about-me-desc-txt,
  .about-me-desc-txt span,
  .statistic-txt,
  .about-hobbies-txt {
    font-size: 12px !important;
  }
  .statistic-icon i .statistic-txt span,
  .about-me-desc-txt:first-child {
    font-size: 14px !important;
  }
 
}
@media screen and (max-width: 540px){
   .about-hobbies{
    padding-top: 400px!important;
  }
}

</style>
