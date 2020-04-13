<template>
	<div>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">头像</view>
				<view class="cu-avatar round margin-left" style="background-image:url(/static/img/logo.jpg);"></view>
			</view>
			
			<view class="cu-form-group">
				<view class="title">用户名</view>
				<input placeholder="请输入用户名" name="input" />
			</view>
			
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="请输入手机号" name="input" />
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
			
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="请输入验证码" name="input" />
				<button class='cu-btn bg-green shadow'>获取验证码</button>
			</view>
			
			<view class="cu-form-group ">
				<view class="title">用户类型</view>
				<picker @change="userTypeChange" :range="user_type_range" :value="user_type_index">
					<view class="picker">
						{{user_type_range[user_type_index]}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group ">
				<view class="title">性别</view>
				<picker @change="sexChange" :range="sex_range" :value="sex_index">
					<view class="picker">
						{{sex_range[sex_index]}}
					</view>
				</picker>
			</view>
			
			
			<radio-group class="block agree-radio-box" @click="agreeChange">
				<radio :class="agree ? 'checked':''" :checked="agree ? true : false" class="agree-radio"></radio>
				<text class="annotation">同意维德杰瑞销售、服务和结束支持条款和条件</text>
			</radio-group>
		</form>
				
		<div class="visitor" @click="goIndex">游客模式</div>

		<div id="submit-box">
			<button id="btn_submit" @click="submit_form" class="cu-btn round">提交</button>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				user_type_range: ['管理员', '用户'],
				user_type_index: 0,
				
				sex_range: ['男', '女'],
				sex_index: 0,
				
				agree: false,
			}
		},
		
		methods: {
			userTypeChange(e) {
				this.user_type_index = e.detail.value
			},
			
			sexChange(e) {
				this.sex_index = e.detail.value
			},
			
			agreeChange(e) {
				this.agree = !this.agree
				console.log(this.agree)
			},

			submit_form() {
				uni.showToast({
					icon: 'none',
          title: '该手机号未注册',
          duration: 2000
        })
			},
			
			goIndex() {
				uni.redirectTo({
					url: '/src/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
>>> radio .wx-radio-input,
checkbox .wx-checkbox-input,
radio .uni-radio-input,
checkbox .uni-checkbox-input {
	margin: 0;
	width: 12px;
	height: 12px;
}

>>> radio:before, checkbox:before {
	font-size 10px
	right 2px
}

.agree-radio
	margin 0 5px
	display: flex;
	align-items: center;
	justify-content: center;


.agree-radio-box
	display flex
	align-items center
	margin-top 10px
	margin-left 10px

.visitor
	color #169BD5
	font-size 16px
	cursor pointer
	margin 15px

#btn_submit
	background-color rgba(0, 166, 156, 1)
	color white
	width 256px
	height 43px
	font-size 18px

#submit-box
	display flex
	align-items center
	justify-content center

</style>
