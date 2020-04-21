<template>
  <div>
    <swiper :swiperList="swiperList" style="height: 100%"></swiper>

    <entrance :data="entrance"></entrance>

    <column-chart></column-chart>
  </div>
</template>

<script>
import swiper from 'components/basic/swiper'
import entrance from 'components/basic/entrance'
import columnChart from 'components/charts/column'
export default {
  components: {
    swiper,
    entrance,
    columnChart
  },
  data() {
    return {
      swiperList: [{
				name: 'swiper1',
				type: 'image',
				url: require('static/img/swiper/swiper1.jpg')
			}, {
				name: 'swiper2',
				type: 'image',
				url: require('static/img/swiper/swiper2.jpg')
			}, {
				name: 'swiper3',
				type: 'image',
				url: require('static/img/swiper/swiper3.jpg')
      }],
      entrance: [{
				name: '考勤签到',
				icon: require('static/icon/submenu/time/signin.svg'),
				url: ''
			}, {
				name: '请假申请',
				icon: require('static/icon/submenu/time/leave.svg'),
				url: ''
			}, {
				name: '二维码考勤',
				icon: require('static/icon/submenu/time/QR.svg'),
				url: ''
			}, {
				name: '考勤记录',
				icon: require('static/icon/submenu/time/inout.svg'),
				url: ''
			}]
    }
  }
}
</script>

<style>

</style>