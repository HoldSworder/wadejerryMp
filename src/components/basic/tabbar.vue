<template>
	<div>
		<div class="hold-bottom" :style="{height: holdHeight + 'px'}">

		</div>
		<cover-view class='bottom-box'>

			<cover-view class="cu-bar tabbar">

				<cover-view class="action text-color bar-box" @click="goNext('src/pages/index/index')">
						<cover-image src="../../../static/icon/tabBar/home.png" class="bar-img"></cover-image> 
						<cover-view>首页</cover-view>
				</cover-view>

				<cover-view class="action text-color bar-box" @click="goNext('src/pages/index/index')">
						<cover-image src="../../../static/icon/tabBar/advisory.png" class="bar-img"></cover-image> 
						<cover-view>咨询</cover-view>
				</cover-view>

				<cover-view class="action text-color bar-box" @click="goNext('src/pages/index/index')">
						<cover-image src="../../../static/icon/tabBar/solution.png" class="bar-img"></cover-image> 
						<cover-view>解决方案</cover-view>
				</cover-view>

				<cover-view class="action text-color bar-box" @click="goNext('src/pages/index/index')">
						<cover-image src="../../../static/icon/tabBar/user.png" class="bar-img"></cover-image> 
						<cover-view>我的</cover-view>
				</cover-view>

			</cover-view>
		
		</cover-view>
	</div>
</template>

<script>
	import uniTool from 'common/uniTool'
	export default {
		data() {
			return {
				holdHeight: 0
			}
		},

		methods: {
			goNext(url) {
				uni.navigateTo({
						url
				})
			}
		},

		mounted() {
			uniTool.getStyle('.bottom-box', this).then(res => {
				this.holdHeight = res.height
				console.log(res.height)
			})
		}		
	}
</script>

<style lang="stylus">
.bottom-box
	position fixed
	width 100%
	bottom 0
	z-index 999999
	background white

.text-color {
  color #8A8A8A
}

.bar-img
	width 24px
	height 24px

.bar-box
	display flex !important
	justify-content center !important
	align-items center !important
	flex-direction column !important
</style>
