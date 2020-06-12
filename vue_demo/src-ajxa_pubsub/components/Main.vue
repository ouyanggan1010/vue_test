<template>
	<div>
		<h2 v-if="firstView">输入用户名搜索</h2>
		<h2 v-if="loading">LOADING...</h2>
		<h2 v-if="errorMsg">{{errorMsg}}</h2>
		<div class="row" v-cloak>
			<div class="card" v-for="(user,index) in users" :key="index">
				<a :href="user.url" target="_blank">
					<img :src="user.avatar_url" style='width: 100px' />
				</a>
				<p class="card-text">{{user.name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import PubSub from "pubsub-js"
	import axios from "axios"

	export default {
		data() {
			return {
				firstView: true,
				loading: false,
				errorMsg: "",
				users: null //[{url:"",avatar_url:"",name:""}]
			}
		},
		mounted() {
			//订阅消息
			PubSub.subscribe("searchList", (msg, data) => {
				//更新请求中的状态
				this.users = null;
				this.firstView = false;
				this.loading = true;
				this.errorMsg="";
				//发送请求
				const ur = `https://api.github.com/search/users?q=${data}`;
				axios.get(ur).then((response) => {
					const users = response.data.items;
					/*this.users = users.map((item) => {
						let obj={
							"name":item.login,
							"url":item.html_url,
							"avatar_url":item.avatar_url
						}
                        return obj;
					});*/
					this.users = users.map(item => ({
						"name": item.login,
						"url": item.html_url,
						"avatar_url": item.avatar_url
					}));

					this.loading = false;
				}).catch((error) => {
					this.loading = false;
					this.errorMsg = error.message;
					alert("请求失败")
				});
			});
		}
	}
</script>

<style>
	[v-cloak] {
		display: none;
	}
	
	.card {
		float: left;
		width: 33.333%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}
	
	.card>img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}
	
	.card-text {
		font-size: 85%;
	}
</style>