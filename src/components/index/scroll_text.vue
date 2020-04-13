<template>  
  <div id="text_container" class="text-container" ref="container">
    <div id="text_box" class="text-box" :style="{left: boxLeft}" ref="box">
      {{ text }}
    </div>
  </div>
</template>

<script>
import uniTool from 'common/uniTool'
export default {
  props: ['text', 'speed', 'interval'],
  data() {
    return {
      boxLeft: 0
    }
  },
  async mounted () {
    const THAT = this
    const boxStyle = await uniTool.getStyle('#text_box', this)
    const containerStyle = await uniTool.getStyle('#text_container', this)
    let width = boxStyle.width
    let containerW = containerStyle.width
    setInterval(() => {
      let left = parseInt(THAT.boxLeft)
      THAT.boxLeft = (left -= 1) + 'px'
      if(Math.abs(left) >= width) THAT.boxLeft = containerW + 'px'
    }, this.interval)
  }
}
</script>

<style lang="stylus" scoped>
.text-container
  position relative
  max-width  100vw
  overflow hidden
  line-height 1em
  height 1em

.text-box
  position absolute
  white-space nowrap 
  font-family: '宋体 常规', '宋体', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 10px;
  left 0
</style>