/*包含所有基于state的get计算属性*/
export default {
	//todos的总数量
	totalCount(state) {
		return state.todos.length;
	},
	//todos中已完成的数量
	completeds(state) {
		const todos = state.todos;
		return todos.reduce((total, item) => {
			let num = item.template ? ++total : total;
			return num;
		}, 0);
	},
	//是否全部选中的状态
	allCheck(state,getters){
		return getters.totalCount>0 && getters.completeds == getters.totalCount;
	}
}