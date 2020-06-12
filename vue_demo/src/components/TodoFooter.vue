<template>
	<div class="todo-footer">
		<label>
          <input type="checkbox" v-model="isAllComplete"/>
        </label>
		<span>
          <span>已完成{{completeds}}</span> / 全部{{totalCount}}
		</span>
		<button class="btn btn-danger" v-show="completeds" @click="clearTemplate">清除已完成任务</button>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters(['totalCount','completeds']),
			//多选按钮，如果是有set方法的则需要保留set方法，只将get方法放入到vuex中
			isAllComplete: {
				get(){
					return this.$store.getters.allCheck;
				},
				set(value) {
					//全选或全不选所有todo
					this.$store.dispatch('modifyStatus',value);
				}
			}
		},
		methods: {
			clearTemplate() {
				let r = window.confirm('是否确认删除?');
				if(r) {
					this.$store.dispatch('clearTodo');
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