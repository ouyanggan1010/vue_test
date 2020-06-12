(function() {
	const MyPlugin = {};
	//插件对象必须有一个install()
	MyPlugin.install = function(Vue, options) {
		//1.添加全局对象或方法(函数对象的方法)，与directive(自定义指令)类似
		Vue.myGlobalMethod = function() {
			console.log('Vue函数对象的方法 myGlobalMethod');
		}
		//2.添加全局资源
		//自定义指令
		Vue.directive('my-directive', function(el, binding) {
			el.innerHTML = binding.value.toUpperCase();
		});
		//4.添加实例方法 '$'用来区分是函数对象的方法，还是实例对象的方法
		Vue.prototype.$method = function() {
			console.log('Vue实例对象的方法 $method');
		}
	}
	window.MyPlugin = MyPlugin;
})();