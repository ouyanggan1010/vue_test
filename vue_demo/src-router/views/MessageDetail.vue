<template>
	<div>
		<h2>描述：</h2>
		<ul>
			<li>id:{{message.id}}</li>
			<li>title:{{message.title}}</li>
			<li>content:{{message.content}}</li>
		</ul>
	</div>
</template>

<script>
	const allMessage = [{
		title: "message1",
		id: 1,
		content: "message1 content..."
	}, {
		title: "message2",
		id: 2,
		content: "message2 content..."
	}, {
		title: "message3",
		id: 4,
		content: "message3 content..."
	}]
	export default {
		data() {
			return {
				message: {}
			}
		},
		mounted() {
			const id = this.$route.params.id;
			//const id = this.$route.query.id;
			this.message = allMessage.find((item) => {
				return item.id == id;
			});
		},
		watch: {
			$route(value) {
				const id = value.params.id;
				//const id = value.query.id;
				this.message = allMessage.find((item) => {
					return item.id == id;
				});
			}
		}
	}
</script>

<style>

</style>