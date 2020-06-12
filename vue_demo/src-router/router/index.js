/*路由器模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'

Vue.use(VueRouter);

export default new VueRouter({
	routes: [{
		path: '/',
		redirect: '/about'
	}, {
		path: '/about',
		component: About
	}, {
		path: '/home',
		component: Home,
		children: [{
			path: 'news',
			component: News
		}, {
			path: 'message',
			component: Message,
			children: [{
				name: 'detail',
				path: 'message_detail/:id', //params
				//path:'message_detail',//query
				component: MessageDetail
			}]
		}, {
			path: '',
			redirect: '/home/news'
		}]
	}]
})