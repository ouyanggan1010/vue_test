<template>
	<div>
		<p class="mesg">{{mesg}}</p>
	</div>
</template>

<script>
	export default {//配置对象
		data(){//在组件里面必须写函数
			return{
				mesg:"Hello Vue.js"
			}
		}
	}
</script>

<style>
	.mesg{
		color: darkgoldenrod;
		font-size: 30px;
	}
</style>