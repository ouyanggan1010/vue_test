<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<!--TodoHeader.vue-->
				<!--<TodoHeader :addTodo="addTodo" />-->
				<!--第一种：自定义事件-->
				<!--<TodoHeader @addTodo="addTodo" />-->
				<TodoHeader ref="header" />
				<!--TodoList.vue-->
				<!--<TodoList :todos="todos" :delTodo="delTodo" />-->
				<!--使用pubsub订阅消息-->
				<TodoList :todos="todos" />
				<!--TodoFooter.vue-->
				<!--<TodoFooter :todos="todos" :clearTodo="clearTodo" :modifyStatus="modifyStatus" />-->
				<!--slot 父组件向子组件传递标签数据，需要将标签用到的变量和事件都放在父组件中-->
				<TodoFooter>
					<input slot="checkAll" type="checkbox" v-model="allCheck"/>
					<span slot="count">已完成{{completeds}} / 全部{{todos.length}}</span>
					<button slot="deleteBtn" class="btn btn-danger" v-show="completeds" @click="clearTemplate">清除已完成任务</button>
				</TodoFooter>
			</div>
		</div>
	</div>
</template>
<!--
	绑定事件监听
	触发事件
-->
<script>
	import PubSub from 'pubsub-js'
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	/*工具模块*/
	import storageUtil from './util/localStorageUtil.js'
	
	export default {
		data() {
			return {
				//从localStorage中读取todos
				todos: storageUtil.read("todos") || '[]'
			}
		},
		//映射成标签
		components: {
			TodoHeader,
			TodoList,
			TodoFooter
		},
		mounted() { //执行异步代码
			//第二种：给<TodoHeader />标签绑定addTodo自定义事件监听
			//this.$on("addTodo",this.addTodo);//给App绑定的监听，不对
			this.$refs.header.$on("addTodo", this.addTodo);
			/*订阅消息：两个参数 事件名与回调函数*/
			PubSub.subscribe("delTodo", (msg, index)=> {
				//为了让this指向改vm对象，需要用箭头函数，否则this指的就是PubSub对象
                this.delTodo(index);
			});
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
			},
			/*子组件TodoFooter的方法*/
			clearTemplate() {
				let r = window.confirm('是否确认删除?');
				if(r) {
					this.clearTodo();
				}
			}
		},
		watch: { //监视
			todos: {
				deep: true, //表示深度监视
				handler: function(newVal, oldVal) {
					//将todos的最新json数据保存到localStorage中
					storageUtil.save("todos",newVal);
				}
				/*下面两种效率更高，少了一层函数*/
				/*handler: function(val) {
					window.localStorage.setItem("todos", JSON.stringify(val));
				}
				handler: storageUtil.save;*/
			}
		},
		computed: {
			/*子组件TodoFooter的计算属性*/
			//已完成数目
			completeds() {
				const {
					todos
				} = this;
				return todos.reduce((total, item) => {
					let num = item.template ? ++total : total;
					return num;
				}, 0);
			},
			/*子组件TodoFooter的计算属性*/
			//多选按钮
			allCheck: {
				get() {
					return this.todos.length>0 && this.completeds == this.todos.length;
				},
				set(value) {
					this.modifyStatus(value);
				}
			}
		},
	}
</script>

<style>

</style>