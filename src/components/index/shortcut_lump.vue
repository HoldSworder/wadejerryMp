<template>
  <div id="shortcut_lump" class="shortcut-lump">
    <div class="lump-container">
      <div class="blue-lump lump-div"><span class="lump-text">审批</span></div>
      <div class="lump-box">
        <div class="origin-lump lump-div">
          <span class="lump-text">签到</span>
        </div>
        <div class="placeholder"></div>
        <div class="purple-lump lump-div">
          <span class="lump-text">报餐</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="stylus" scoped>
.blue-lump
	background rgba(60, 171, 253, 1)
	width 40%

.origin-lump {
	background rgba(252, 92, 69, 1)
	width 100%
  height 48%
}

.purple-lump {
	background rgba(101, 102, 252, 1)
	width 100%
  height 48%
}

.lump-container
	width 90%
	height 18vh
	display flex
	justify-content space-evenly

.lump-box
	width 50%
	height 100%

.lump-div {
	display flex
	justify-content center
	align-items center
  border-radius 5px
}

.shortcut-lump
	width 100vw
	display flex
	justify-content center
	align-items center


.lump-text {
  color: #FFF;
	font-size 20px
	font-weight 400
}

.placeholder {
  height 4%
}
</style>
