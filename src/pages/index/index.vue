<template>
	<div class="container">
		<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item, index) of swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted show-play-btn=false controls=false objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>

		<div id="entrance_container">
			<div v-for="(item, index) of entrance" :key="index" class="entrance-box">
				<image :src="item.url" class="entrance-img">
				<div>{{item.name}}</div>
			</div>
		</div>

		<div id="news_container">
			<div class="new-text"><span class="time-text">时间</span>简报</div>
			<div style="float:left;width: 1px;height: 25px; background: #f2f2f2;"></div> 
			<scroll-text class="scroll-text" :text="text" :speed="1" :interval="100"></scroll-text>
			<span class="news-next">></span>
		</div>

		<shortcut-lump></shortcut-lump>

		<tab-bar></tab-bar>
	</div>
</template>

<script>
import scrollText from 'components/index/scroll_text'
import shortcutLump from 'components/index/shortcut_lump'
export default {
	components: {
		scrollText,
		shortcutLump
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
				url: require('static/icon/index/key.svg')
			}, {
				name: '时间管理',
				url: require('static/icon/index/time.svg')
			}, {
				name: '消费管理',
				url: require('static/icon/index/card.svg')
			}, {
				name: '云访客',
				url: require('static/icon/index/visitor.svg')
			}, {
				name: '车辆管理',
				url: require('static/icon/index/car.svg')
			}, {
				name: '信息发布',
				url: require('static/icon/index/program.svg')
			}, {
				name: '派车管理',
				url: require('static/icon/index/sendCar.svg')
			}, {
				name: '智慧校园',
				url: require('static/icon/index/school.svg')
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
.entrance-img
	width 48px
	height 48px
	margin 5px 0

#entrance_container
	display flex
	align-items center
	justify-content space-around
	flex-wrap wrap

.entrance-box
	width 25%
	height 48px
	font-family '宋体 常规', '宋体', sans-serif
	font-weight 400
	font-style: normal;
	font-size: 12px;
	min-width 25%
	max-width 25%
	min-height 80px
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

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
