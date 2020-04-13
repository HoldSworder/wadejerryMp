<script>
	export default {
		onLaunch: function() {
			this.$store.dispatch('basic/login')
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style lang='stylus'>
	@import 'colorui/main.css'
	@import "colorui/icon.css"
	@import 'style/index.styl'
	
	page {
		background-color: white;
	}

	.container 
		min-height 100vh
</style>
