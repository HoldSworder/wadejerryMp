<template>
  <div>
    <swiper :swiperList="swiperList" style="height: 100%"></swiper>

    <entrance :dataList="entrance"></entrance>

    <column-chart></column-chart>

		<tab-bar></tab-bar>
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
				name: '宿舍管理',
				icon: require('static/icon/submenu/sendcar/sendcar.svg'),
				url: 'entrance'
			}, {
				name: '电子班牌',
				icon: require('static/icon/submenu/sendcar/inout.svg'),
				url: ''
			}]
    }
  }
}
</script>

<style>

</style>