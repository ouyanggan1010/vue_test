<template>
	<div>
		<img class="image" src="./assets/logo.png" />
		<HelloWorld/>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	export default {
		components: {//将组件映射为标签
			HelloWorld
		}
	}
</script>

<style>
	.image {
		width: 200px;
		height: 200px;
	}
</style>