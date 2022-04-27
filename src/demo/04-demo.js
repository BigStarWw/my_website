const demo = `<template>
  <div class="contraction-container">
    <div class="contraction-box">
      <i class="iconfont icon-jian-01" @click="onZoomOut" />
      <el-popover trigger="hover">
        <template #reference><span>{{ ration }}%</span></template>
        <div class="contraction-options-box">
          <div class="option-box">
            <div class="item" @click="onZoomIn">
              <div class="label">放大</div>
            </div>
            <div class="item" @click="onZoomOut">
              <div class="label">缩小</div>
            </div>
          </div>
          <div class="option-box">
            <div
              class="item"
              v-for="(item, index) in contractionRation"
              :key="index"
              @click="onZoom(item)"
            >
              {{ item }}%
            </div>
          </div>
        </div>
      </el-popover>
      <i class="iconfont icon-jia-01" @click="onZoomIn" />
    </div>

    <div class="chart-content-box">
      <div class="chart">
        <div
          id="main-chart-container"
          ref="main-chart-container"
          @mouseup.stop="mouseup"
          @mouseleave.stop="mouseup"
          @mousedown.stop="mousedown"
        >
          <div id="main-chart" ref="main-chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import * as echarts from "echarts"
import { ElPopover } from 'element-plus'
import { loadElementPlusStyle, loadIconFontStyle } from '/src/utils/index.ts'

export default defineComponent({
  components: { ElPopover },
  data() {
    return {
      // 图表放大缩小
      ration: 100,
      isMoving: false,
      currentLeft: 0,
      currentTop: 0,
      temporaryCurTop: 0,
      temporaryCurLeft: 0,
      contractionRation: [800, 400, 200, 150, 100, 50, 25]
    };
  },
  mounted() {
    loadElementPlusStyle();
    loadIconFontStyle();
    this.renderEchart();
  },
  methods: {
    renderEchart() {
      var chartDom = document.getElementById("main-chart") as HTMLElement;
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "30%"],
        },
        visualMap: {
          type: "piecewise",
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 1,
              lt: 3,
              color: "rgba(0, 0, 180, 0.4)",
            },
            {
              gt: 5,
              lt: 7,
              color: "rgba(0, 0, 180, 0.4)",
            },
          ],
        },
        series: [
          {
            type: "line",
            smooth: 0.6,
            symbol: "none",
            lineStyle: {
              color: "#5470C6",
              width: 5,
            },
            markLine: {
              symbol: ["none", "none"],
              label: { show: false },
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
            },
            areaStyle: {},
            data: [
              ["2019-10-10", 200],
              ["2019-10-11", 560],
              ["2019-10-12", 750],
              ["2019-10-13", 580],
              ["2019-10-14", 250],
              ["2019-10-15", 300],
              ["2019-10-16", 450],
              ["2019-10-17", 300],
              ["2019-10-18", 100],
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    /**
     * @description: 鼠标按下
     * @param {*}
     * @return {*}
     */
    mousedown() {
      let _this = this;

      this.isMoving = true;
      this.temporaryCurTop = 0;
      this.temporaryCurLeft = 0;

      document.onmousemove = function (ev: MouseEvent) {
        _this.mousemove(ev);
      };
    },
    /**
     * @description: 鼠标按起
     * @param {*}
     * @return {*}
     */
    mouseup() {
      this.isMoving = false;
      document.onmousemove = null;
    },
    /**
     * @description: 鼠标移动
     * @param {*}
     * @return {*}
     */
    mousemove(ev: MouseEvent) {
      if (!this.isMoving) return;
      let dom = this.$refs["main-chart"] as HTMLElement;

      // 判断是哪个方向移动
      if (this.temporaryCurTop - ev.y < 0 && this.temporaryCurTop !== 0) {
        // 向下
        this.currentTop += ev.y - this.temporaryCurTop;
      }
      if (this.temporaryCurTop - ev.y > 0 && this.temporaryCurTop !== 0) {
        // 向上
        this.currentTop -= -(ev.y - this.temporaryCurTop);
      }
      if (this.temporaryCurLeft - ev.x < 0 && this.temporaryCurLeft !== 0) {
        // 向右
        this.currentLeft += ev.x - this.temporaryCurLeft;
      }
      if (this.temporaryCurLeft - ev.x > 0 && this.temporaryCurLeft !== 0) {
        // 向左
        this.currentLeft -= -(ev.x - this.temporaryCurLeft);
      }

      dom.style.top = this.currentTop + "px";
      dom.style.left = this.currentLeft + "px";

      this.temporaryCurTop = ev.y;
      this.temporaryCurLeft = ev.x;
    },
    /**
     * @description: 放大
     * @param {*}
     * @return {*}
     */
    onZoomIn() {
      if (this.ration >= 800) {
        this.ration = 800;
        return;
      }

      this.ration = this.ration * 2 > 800 ? 800 : this.ration * 2;
      this.onZoom(this.ration);
    },
    /**
     * @description: 缩小
     * @param {*}
     * @return {*}
     */
    onZoomOut() {
      if (this.ration <= 1) {
        this.ration = 1;
        return;
      }

      this.ration = Math.ceil(this.ration / 2);
      this.onZoom(this.ration);
    },
    onZoom(ration: number) {
      let dom = this.$refs["main-chart"] as HTMLElement;
      this.ration = ration;

      dom.style.transform = 'scale('+ this.ration / 100 + ')';
    },
  },
});
<\/script>
<style>


.contraction-container {
  height: calc(100vh - 100px);
  width: 100%;
}
.contraction-box {
  margin: 20px auto;
  width: 134px;
  height: 32px;
  padding: 1px 16px;
  background: #ffffff;
  box-shadow: 0px 0px 6px 0px rgba(186, 186, 186, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.12rem;
  color: #464c5b;
}
.contraction-box > i, 
.contraction-box > span
{
  cursor: pointer;
}
.contraction-options-box {
  padding: 5px 0;
}
.contraction-options-box .option-box .item {
  padding: 0;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #464c5b;
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    border-radius: 4px;
    background-color: #f7f9fc;
  }
}
.contraction-options-box .option-box .item .label {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contraction-options-box .option-box .item .key {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contraction-options-box .option-box .item span {
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  width: 28px;
  height: 28px;
  overflow: hidden;
}
.contraction-options-box .option-box .item i {
  margin: 0;
  display: block;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.contraction-options-box .option-box .item span:nth-child(2) {
  text-align: center;
  margin: 0 6px;
  line-height: 16px;
  width: 10px;
}
.chart-content-box {
  height: 100%;
}
.chart-content-box .chart {
  width: 100%;
  padding: 10px;
  height: calc(100% - 40px);
  border: 1px solid #dcdee2;
  margin-bottom: 0.14rem;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}
.chart-content-box #main-chart-container {
  width: calc(100% - 20px);
  height: 100%;
  position: absolute;
  z-index: 0;
}
.chart-content-box #main-chart {
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(100% - 50px);
  margin-top: 10px;
  position: absolute;
}
.chart-content-box .chart-tips {
  width: 100%;
  position: relative;
  z-index: 10;
  height: 40px;
  background: #fef4e5;
  border-radius: 2px;
  border: 1px solid #ffb74c;
  font-size: 13px;
  color: #464c5b;
  display: flex;
  align-items: center;
}
.chart-content-box .chart-tips i {
  font-size: 0.22rem;
  color: #ff9900;
  margin: 0 2px 0 12px;
}
.chart-content-box .full-screen-btn {
  font-size: 0.12rem;
  font-weight: 400;
  color: #596073;
  text-align: right;
  cursor: pointer;
  float: right;
}
.chart-content-box .full-screen-btn img {
  margin-right: 4px;
  width: 16px;
}
.chart-content-box .full-screen-btn p {
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


`;
export default demo;
