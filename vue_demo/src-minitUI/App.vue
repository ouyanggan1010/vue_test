<template>
	<div>
	    <mt-button @click.native="handleClick" type="primary">primary</mt-button>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	export default {
		data() {
			return {

			}
		},
		methods:{
			handleClick(){
				Toast("点击了")
			}
		}
	}
</script>

<style>

</style>