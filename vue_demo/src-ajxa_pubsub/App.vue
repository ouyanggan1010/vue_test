<template>
	<div class="container">
	    <Search/>
		<UsersMain/>
	</div>
</template>

<script>
	/*Main这个名字不可用*/
	import Search from './components/Search.vue'
	import UsersMain from './components/Main.vue'
	export default {
		data() {
			return {

			}
		},
		components:{
			Search,
			UsersMain
		}
	}
</script>

<style>

</style>