<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="searchKey" />
			<button @click="searchBtn">Search</button>
		</div>
	</section>
</template>

<script>
	import PubSub from "pubsub-js"

	export default {
		data() {
			return {
				searchKey: ""
			}
		},
		methods: {
			//发布消息
			searchBtn() {
				const searchKey = this.searchKey.trim();
				if(!searchKey) {
					alert("请输入关键字搜索");
					return;
				}
				PubSub.publish("searchList", searchKey);
			}
		}
	}
</script>

<style>

</style>