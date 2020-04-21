<template>
  <div id="entrance_container" class="entrance-container">
    <div v-for="(item, index) of data" :key="index" @click="goSubMenu(item.url)" class="entrance-box">
      <image :src="item.icon" class="entrance-img">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
	props: ['data'],
	methods: {
		goSubMenu(url) {
			uni.redirectTo({
				url
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
.entrance-container {
	display flex
	align-items center
	justify-content space-around
	flex-wrap wrap
}

.entrance-img {
	width 48px
	height 48px
	margin 10px 0
}

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

</style>