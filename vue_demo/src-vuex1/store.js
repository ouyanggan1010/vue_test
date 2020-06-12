/*vuex的核心管理对象模块*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/*状态对象*/
const state = {
	count: 11, //初始化状态数据
}
/*更新state函数的对象；只能包含同步代码*/
const mutations = {
	//增加
    INCREMENT(state){
    	state.count++;
    },
    //删除
    DECREMENT(state){
    	state.count--;
    }
}
/*对应事件回调函数的对象；可以包含异步代码（ajax，定时器等）*/
const actions = {
	//增加
	increment({commit,state}) {
		//提交到mutation
        commit('INCREMENT');
	},
	//删除
	decrement({commit,state}){
		//提交到mutation
		commit('DECREMENT');
	},
	incrementIfOdd({commit,state}){
		if(state.count % 2 == 1){
			commit('INCREMENT');
		}
	},
	incrementAsync({commit,state}){
		setTimeout(()=>{
			commit('INCREMENT');
		},1000);
	}
}
/*
 * getter计算属性函数的对象
 * 每个对象模块可能会在不同的js中，所以会每个计算属性都有一个参数表示state对象
 */
const getters = {
	oddOrEvent(state) {
		return state.count % 2 == 0 ? '偶数' : '奇数';
	}
}

export default new Vuex.Store({
	state, //状态对象
	mutations, //包含多个更新state函数的对象
	actions, //包含多个对应事件回调函数的对象
	getters, //包含多个getter计算属性函数的对象
})