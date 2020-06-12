<template>
	<div>
		<div v-if="!repoUrl">loading</div>
		<div v-else>most start is repo
			<a :href="repoUrl">{{repoName}}</a>
		</div>
	</div>
</template>
<!--
	绑定事件监听
	触发事件
-->
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				repoUrl: "",
				repoName: ""
			}
		},
		//生命周期
		mounted() {
			const ur = "https://api.github.com/search/repositories?q=vue&sort=stars";
			/*this.$http.get(ur).then((response)=>{
				this.repoName = response.data.items[0].name;
				this.repoUrl = response.data.items[0].html_url;
			},(response)=>{
				alert("请求失败")
			});*/
			axios.get(ur).then((response) => {
				this.repoName = response.data.items[0].name;
				this.repoUrl = response.data.items[0].html_url;
			}).catch(error => {
				alert("请求失败")
			});
		}
	}
</script>

<style>

</style>