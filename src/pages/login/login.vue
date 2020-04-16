<template>
	<div>
		<div id="header">
			<image id="logo" :src="logo" mode=""></image>
			<p>维德杰瑞小程序</p>
		</div>
		
		<div id="line"></div>
		
		<div id="info_box">
			<p>请确认一下获取信息</p>
			<button id="btn_phone" open-type='getPhoneNumber' @getphonenumber="getPhoneNumber" class="cu-btn round bg-blue">手机号码获取</button>
			<!-- <button id="btn_phone" @click="getPhoneNumber" class="cu-btn round">手机号码获取</button> -->
		</div>
		
	</div>
</template>

<script>
	import uniTool from '@/common/uniTool.js'

	export default {
		data() {
			return {
				logo: require('static/img/logo.jpg'),
			}
		},
		methods: {
			async getPhoneNumber(e) {
				if(e.detail.errMsg !== "getPhoneNumber:ok") return
				const phoneNumber = await this.$store.dispatch('user/getPhoneNumber', e.detail)

				uni.redirectTo({
					url: `/src/pages/login/loginForm`
				})
			},
		}
	}
</script>

<style lang="stylus" scoped>
	#logo
		width 96px
		height 96px
		
	#btn_phone 
		width 256px
		height 43px
		font-size 18px
		background-color rgba(0, 166, 156, 1)
		color white
		
	#line
		width 100vw
		height 1px
		background #E0E0E0
		
	#header
		height 35vh
		display flex
		justify-content center
		align-items center
		flex-wrap wrap
		flex-direction column
		
	#header p
		color #555555
		font-size 16px
		margin-top 10px
		
	#info_box
		display flex
		justify-content center
		align-items center
		flex-wrap wrap
		flex-direction column
		
	#info_box p 
		margin 30px 0
		font-size 16px
		color #555555

</style>
