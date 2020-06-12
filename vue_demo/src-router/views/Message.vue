<template>
	<div>
		<ul>
			<li v-for="(item,index) in message" :key="item.id">
				<router-link :to="`/home/message/message_detail/${item.id}`">{{item.title}}</router-link>
				<!--<router-link :to="`/home/message/message_detail?id=${item.id}`">{{item.title}}</router-link>-->
			    <input type="button" value="push查看" @click="$router.push(`/home/message/message_detail/${item.id}`)" />
				<input type="button" value="replace查看" @click="$router.replace(`/home/message/message_detail/${item.id}`)" />
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: []
			}
		},
		mounted() {
			setTimeout(() => {
				const msg = [{
					title: "message1",
					id: 1
				}, {
					title: "message2",
					id: 2
				}, {
					title: "message3",
					id: 4
				}]
				this.message = msg;
			}, 1000)
		}
	}
</script>

<style>

</style>