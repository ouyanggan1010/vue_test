<template>
	<div class="col-md-4">
		<form class="form-horizontal">
			<div class="form-group">
				<label>用户名</label>
				<input type="text" class="form-control" placeholder="用户名" v-model="name">
			</div>
			<div class="form-group">
				<label>评论内容</label>
				<textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button type="button" class="btn btn-default pull-right" @click="add">提交</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
				content: ""
			}
		},
		props: {
			addComment: {
				type: Function,
				required: true,
				default: ""
			}
		},
		methods: {
			add() {
				//1.先检查输入的合法性
				const {
					name,
					content,
					addComment
				} = this;
				if(!name || !content) {
					alert("姓名或内容不能为空");
					return;
				}
				//2.根据输入的数据，封装成一个comment对象
				let comment = {
					name,
					content
				};
				//3.添加到comments中
				addComment(comment);
				//4.清除输入
				this.name = "";
				this.content = "";
			}
		}
	}
</script>

<style>

</style>