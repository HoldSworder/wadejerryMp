<template>
  <view class="qiun-columns">
    <view class="qiun-charts">
      <canvas
        canvas-id="canvasColumn"
        id="canvasColumn"
        class="charts"
        @touchstart="touchColumn"
      ></canvas>
    </view>
  </view>
</template>

<script>
import uCharts from 'plugins/u-charts/u-charts/u-charts.js'
var _self
var canvaPie = null

export default {
  data() {
    return {
      cWidth: '',
      cHeight: '',
      pixelRatio: 1,
      serverData: '',
      chartData: {
        series: [
          {
            name: '办公室',
            data: 50,
          },
          {
            name: '会议室',
            data: 30,
          },
          {
            name: '东门',
            data: 20,
          },
          {
            name: '西门',
            data: 18,
          },
          {
            name: '南门',
            data: 8,
          },
        ],
      },
    }
  },
  mounted() {
    _self = this
    this.cWidth = uni.upx2px(750)
    this.cHeight = uni.upx2px(500)
    this.showPie('canvasColumn', this.chartData)
  },
  methods: {
    showPie(canvasId, chartData) {
      canvaPie = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: 'pie',
        fontSize: 11,
        legend: { show: true },
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true,
        extra: {
          pie: {
            lableWidth: 15,
          },
        },
      })
    },
    touchPie(e) {
      canvaPie.showToolTip(e, {
        format: function (item) {
          return item.name + ':' + item.data
        },
      })
    },
  },
}
</script>

<style scoped>
page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
.qiun-padding{padding:2%; width:96%;}
.qiun-wrap{display:flex; flex-wrap:wrap;}
.qiun-rows{display:flex; flex-direction:row !important;}
.qiun-columns{display:flex; flex-direction:column !important;}
.qiun-common-mt{margin-top:10upx;}
.qiun-bg-white{background:#FFFFFF;}
.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
</style>
