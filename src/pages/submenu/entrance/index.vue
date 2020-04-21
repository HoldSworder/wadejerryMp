<template>
  <div>
    <swiper :swiperList="swiperList" style="height: 100%"></swiper>

    <entrance :data="entrance"></entrance>

    <pie-chart></pie-chart>
  </div>
</template>

<script>
import swiper from 'components/basic/swiper'
import entrance from 'components/basic/entrance'
import pieChart from 'components/charts/pie'
export default {
  components: {
    swiper,
    entrance,
    pieChart
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
				name: '远程开门',
				icon: require('static/icon/submenu/entrance/door.svg'),
				url: 'entrance'
			}, {
				name: '授权申请',
				icon: require('static/icon/submenu/entrance/find.svg'),
				url: ''
			}, {
				name: '蓝牙开门',
				icon: require('static/icon/submenu/entrance/bluetooth.svg'),
				url: ''
			}, {
				name: '进出记录',
				icon: require('static/icon/submenu/entrance/inout.svg'),
				url: ''
			}]
    }
  }
}
</script>

<style>

</style>