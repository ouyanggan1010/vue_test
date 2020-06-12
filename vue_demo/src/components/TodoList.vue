<template>
	<ul class="todo-main">
		<TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" />
	</ul>
</template>

<script>
	import {mapState} from 'vuex'
	import TodoItem from './TodoItem.vue'
	export default {
		//计算属性会作为vue实例的属性
		computed:{
			...mapState(['todos']),
		},
		components: {
			TodoItem
		},
		watch: { //监视todos这个属性
			todos: {
				deep: true, //表示深度监视
				handler: function(newVal, oldVal) {
					//将todos的最新json数据保存到localStorage中
					window.localStorage.setItem("todos", JSON.stringify(newVal));
				}
			}
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