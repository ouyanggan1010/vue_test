/**/
import {ADD_TODO,DEL_TODO,MODIFY_STATUS,CLEAR_TODO,REQ_TODOS} from './types'
export default {
	//添加todo
	[ADD_TODO] (state,{todo}){
		state.todos.unshift(todo);
	},
	//删除todo
	[DEL_TODO] (state,{index}){
		state.todos.splice(index, 1);
	},
	//全选或全不选所有todo
	[MODIFY_STATUS] (state,{check}){
		state.todos.forEach(item => {
			item.template = check;
		});
	},
	//删除多个todo
	[CLEAR_TODO] (state){
		state.todos = state.todos.filter(item => {
			return !item.template;
		});
	},
	//异步获取todos
	[REQ_TODOS] (state,{todos}){
		state.todos = todos;
	}
}