/*包含多个接收组件通知触发mutation调用间接状态的方法的对象*/
import {ADD_TODO,DEL_TODO,MODIFY_STATUS,CLEAR_TODO,REQ_TODOS} from './types'
export default {
	//异步获取todos
	reqTodos({commit}){
		setTimeout(()=>{
			const todos = JSON.parse(window.localStorage.getItem("todos"));
			//提交一个mutation的请求
		    commit(REQ_TODOS,{todos});
		},1000);
	},
	//添加todo
	addTodo({commit,state},todo){
		//提交一个mutation的请求
		commit(ADD_TODO,{todo});
	},
	//删除todo
	delTodo({commit,state},index){
		//提交一个mutation的请求
		commit(DEL_TODO,{index});
	},
	//全选或全不选所有todo
	modifyStatus({commit,state},check){
		//提交一个mutation的请求
		commit(MODIFY_STATUS,{check});
	},
	//删除多个todo
	clearTodo({commit,state}){
		//提交一个mutation的请求
		commit(CLEAR_TODO);
	}
}
