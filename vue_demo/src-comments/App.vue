<template>
	<div>
		<header class="site-header jumbotron">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h1>{{title}}</h1>
					</div>
				</div>
			</div>
		</header>
		<div class="container">
			<Add :addComment="addComment"/>
			<!--父组件给子组件传值，用强制绑定，最好属性名与data数据名一致-->
			<List :comments="comments" :delComment="delComment" />
		</div>
	</div>
</template>

<script>
	import Add from './components/Add.vue'
	import List from './components/List.vue'
	export default {
		data() {
			return {
				title: "请发表对React的评论",
				//数据在哪个组件，操作数据的行为（方法）就应该定义在哪个组件上
				comments:[{
					name:"Bob",
					content:"Vue 还不错！"
				},{
					name:"Cat",
					content:"Vue So Easy"
				},{
					name:"Bz",
					content:"Vue So So"
				}]
			}
		},
		components: {
			Add,
			List
		},
		methods:{
			//添加评论
			addComment(comment){
				this.comments.unshift(comment);
			},
			//删除评论
			delComment(i){
				this.comments.splice(i,1);
			},
		}
	}
</script>

<style>
	
</style>