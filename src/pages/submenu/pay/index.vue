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
				name: '消费充值',
				icon: require('static/icon/submenu/pay/pay.svg'),
				url: 'entrance'
			}, {
				name: '餐厅订餐',
				icon: require('static/icon/submenu/pay/dining.svg'),
				url: ''
			}, {
				name: '记录查询',
				icon: require('static/icon/submenu/pay/inout.svg'),
				url: ''
			}]
    }
  }
}
</script>

<style>

</style>