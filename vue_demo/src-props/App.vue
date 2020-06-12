<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<!--TodoHeader.vue-->
				<TodoHeader :addTodo="addTodo" />
				<!--TodoList.vue-->
				<TodoList :todos="todos" :delTodo="delTodo" />
				<!--TodoFooter.vue-->
				<TodoFooter :todos="todos" :clearTodo="clearTodo" :modifyStatus="modifyStatus" />
			</div>
		</div>
	</div>
</template>

<script>
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	export default {
		data() {
			return {
				//从localStorage中读取todos
				todos: JSON.parse(window.localStorage.getItem("todos") || '[]')
			}
		},
		//映射成标签
		components: {
			TodoHeader,
			TodoList,
			TodoFooter
		},
		methods: {
			//添加
			addTodo(todo) {
				this.todos.unshift(todo);
			},
			//删除单个
			delTodo(i) {
				this.todos.splice(i, 1);
			},
			//清除多个
			clearTodo() {
				this.todos = this.todos.filter(item => {
					return !item.template;
				});
			},
			//修改单选多选的状态
			modifyStatus(value) {
				this.todos.forEach(item => {
					item.template = value;
				});
			}
		},
		watch: {//监视
			todos:{
				deep:true,//表示深度监视
				handler:function(newVal, oldVal){
					//将todos的最新json数据保存到localStorage中
					window.localStorage.setItem("todos", JSON.stringify(newVal));
				}
			}
		}
	}
</script>

<style>

</style>