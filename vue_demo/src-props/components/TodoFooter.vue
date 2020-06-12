<template>
	<div class="todo-footer">
		<label>
          <input type="checkbox" v-model="allCheck"/>
        </label>
		<span>
          <span>已完成{{completeds}}</span> / 全部{{todos.length}}
		</span>
		<button class="btn btn-danger" v-show="completeds" @click="clearTemplate">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		props: {
			todos: Array,
			clearTodo: Function,
			modifyStatus: Function
		},
		computed: {
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
		methods: {
			clearTemplate() {
				let r = window.confirm('是否确认删除?');
				if(r) {
					this.clearTodo();
				}
			}
		}
	}
</script>

<style>
	/*footer*/
	
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}
	
	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}
	
	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}
	
	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>