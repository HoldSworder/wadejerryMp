<template>
	<div class='bottom-box'>

		<view class="cu-bar tabbar">

			<view class="action text-color">
				<navigator open-type="navigate" url="src/pages/index/index" hover-class="navigator-hover">
          <view class="cuIcon-homefill"></view> 
					首页
				</navigator>
			</view>

			<view class="action text-color">
				<navigator open-type="navigate" url="src/pages/index/index" hover-class="navigator-hover">
					<view class="cuIcon-news"></view> 
					咨询
				</navigator>
			</view>

			<view class="action text-color">
        <navigator open-type="navigate" url="src/pages/index/index" hover-class="navigator-hover">
          <view class="cuIcon-form"></view>
          解决方案
        </navigator>
			</view>

			<view class="action text-color">
				<navigator open-type="navigate" url="src/pages/index/index" hover-class="navigator-hover">
					<view class="cuIcon-my">
					</view>
					我的
				</navigator>
			</view>

		</view>
	
	</div>
</template>

<script>
	export default {
		onLoad() {
			const pages = getCurrentPages()
			console.log(pages)
		}		
	}
</script>

<style lang="stylus">
.bottom-box
	position fixed
	width 100%
	bottom 0
	z-index 99

.text-color {
  color #8A8A8A
}

</style>
