<template>
	<div @click="$emit('tiaozhuan')">
		<img :src="detailitem.img.substr(0,77)" alt="sss" style="width:100%">
		<span><van-icon name="play-circle-o" />{{detailitem.id}}</span>
		<span><van-icon name="orders-o" />{{detailitem.commentlen}}</span>
		<p>{{detailitem.name}}</p>
		
	</div>
</template>

<script>
	export default {
		props:['detailitem']
	}
</script>

<style >
	
</style>
