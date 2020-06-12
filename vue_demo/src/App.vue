<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<!--TodoHeader.vue-->
				<TodoHeader />
				<!--TodoList.vue-->
				<TodoList />
				<!--TodoFooter.vue-->
				<TodoFooter />
			</div>
		</div>
	</div>
</template>

<script>
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	export default {
		//映射成标签
		components: {
			TodoHeader,
			TodoList,
			TodoFooter
		},
		mounted() {
			//发送命令给actions：异步获取保存todos数据并显示
			this.$store.dispatch('reqTodos');
		}
	}
</script>

<style>

</style>