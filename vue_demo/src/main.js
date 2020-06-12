import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import './base.css'

new Vue({
	el: "#app",
	store,
	/*components: {
		App
	},
	template: "<App/>"*/
	render:h => h(App)
});
/*render为渲染函数*/