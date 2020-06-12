<template>
	<ul>
		<li v-for="(item,index) in newsArr" :key="index">{{item}}</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return{
				newsArr:['news001','news002','news003','news004']
			}
		}
	}
</script>

<style>
</style>