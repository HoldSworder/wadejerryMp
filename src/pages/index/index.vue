<template>
	<div class="container">
		<swiper :swiperList="swiperList" style="height: 100%"></swiper>

		<entrance :dataList="entrance"></entrance>

		<div id="news_container">
			<div class="new-text"><span class="time-text">时间</span>简报</div>
			<div style="float:left;width: 1px;height: 25px; background: #f2f2f2;"></div> 
			<!-- <scroll-text class="scroll-text" :text="text" :speed="1" :interval="100"></scroll-text> -->
			<span class="scroll-text">这是一条测试text,WADEJERRY...</span>
			<span class="news-next">></span>
		</div>

		<shortcut-lump></shortcut-lump>

		<column-chart></column-chart>

		<tab-bar></tab-bar>
	</div>
</template>

<script>
import scrollText from 'components/index/scroll_text'
import shortcutLump from 'components/index/shortcut_lump'
import columnChart from 'components/charts/column'
import swiper from 'components/basic/swiper'
import entrance from 'components/basic/entrance'
export default {
	components: {
		scrollText,
		shortcutLump,
		columnChart,
		swiper,
		entrance
	},
	data() {
		return {
			text: `上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。
						接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。
						定义的变量比接口少了一些属性是不允许的`,
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
				name: '出入口',
				icon: require('static/icon/index/key.svg'),
				url: '/src/pages/submenu/entrance/index'
			}, {
				name: '时间管理',
				icon: require('static/icon/index/time.svg'),
				url: '/src/pages/submenu/time/index'
			}, {
				name: '消费管理',
				icon: require('static/icon/index/card.svg'),
				url: '/src/pages/submenu/pay/index'
			}, {
				name: '云访客',
				icon: require('static/icon/index/visitor.svg'),
				url: '/src/pages/submenu/visitor/index'
			}, {
				name: '车辆管理',
				icon: require('static/icon/index/car.svg'),
				url: '/src/pages/submenu/car/index'
			}, {
				name: '信息发布',
				icon: require('static/icon/index/program.svg'),
				url: '/src/pages/submenu/info/index'
			}, {
				name: '派车管理',
				icon: require('static/icon/index/sendCar.svg'),
				url: '/src/pages/submenu/sendcar/index'
			}, {
				name: '智慧校园',
				icon: require('static/icon/index/school.svg'),
				url: '/src/pages/submenu/school/index'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
.time-text
	color #169BD5

$newsText = 14px

.new-text
	font-family: '宋体 Bold Oblique', '宋体 Bold', '宋体 常规', '宋体', sans-serif;
	font-weight: 700;
	font-style: oblique;
	font-size $newsText

#news_container
	display flex
	flex-wrap nowrap 
	align-items center
	justify-content space-evenly
	margin 10px 0
	padding 5px 0
	border 1px solid #f2f2f2
	border-left 0
	border-right 0

.scroll-text
	min-width 55vw

.news-next
	line-height 1em
	height 1em
	color #999

</style>
