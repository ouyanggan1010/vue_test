<template>
	<li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :class="{active:isBgClass}">
		<label>
            <input type="checkbox" :value="todo.title" v-model="todo.template"/>
            <span>{{todo.title}}</span>
          </label>
		<button class="btn btn-danger" v-show="btnShow" @click="delItem(index)">删除</button>
	</li>
</template>

<script>
	import PubSub from 'pubsub-js'
	export default {
		data() {
			return {
				isBgClass: false,
				btnShow: false
			}
		},
		props: {
			todo: Object,
			index: Number,
			//delTodo: Function
		},
		methods: {
			handleEnter(isEnter) {
				if(isEnter) {
					this.isBgClass = true;
					this.btnShow = true;
				} else {
					this.isBgClass = false;
					this.btnShow = false;
				}
			},
			delItem(i) {
				const {
					todo,
					index,
					delTodo
				} = this;
				let r = window.confirm(`是否确认删除${todo.title}?`);
				if(r) {
					//delTodo(index);
					//发布消息 订阅消息
					PubSub.publish("delTodo",index);
				}
			}
		}
	}
</script>

<style>
	/*item*/
	
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}
	
	li.active {
		background: #dedede;
	}
	
	li label {
		float: left;
		cursor: pointer;
	}
	
	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}
	
	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}
	
	li:before {
		content: initial;
	}
	
	li:last-child {
		border-bottom: none;
	}
</style>