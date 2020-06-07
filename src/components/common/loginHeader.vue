<template>
	<div>
		<div class="header">
			<div @click="backUserInfo()"><van-icon name="arrow-left" /></div>
			<div>{{middleContent}}</div>
			<div><slot name="right"></slot></div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['middleContent'],
		methods:{
			backUserInfo() {
				history.back();
			}
		}
	}
</script>

<style scoped lang="scss">
	.header {
		height:50px;width:100%;
		display:flex;
		background-color: white;
		margin-bottom: 10px;
		div{
			flex:1;text-align: center;font-size: 4vw;line-height: 50px;height:50px;
		}
	}
</style>
