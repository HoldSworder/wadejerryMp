<template>
  <div>
    <swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item, index) of swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted show-play-btn=false controls=false objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
  </div>
</template>

<script>
export default {
  props: ['swiperList']
}
</script>

<style>

</style>