<template>
	<ul class="todo-main">
		<TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" :delTodo="delTodo" />
	</ul>
</template>

<script>
	import TodoItem from './TodoItem.vue'
	export default {
		data() {
			return {

			}
		},
		props: {
			todos: Array,
			delTodo: Function
		},
		components: {
			TodoItem
		}
	}
</script>

<style>
	/*main*/
	
	.todo-main {
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}
	
	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>