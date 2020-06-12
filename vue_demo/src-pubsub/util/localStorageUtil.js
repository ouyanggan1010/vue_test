/*用来存放localStorage，文件命名最好是小写开头，因为暴露的是一个对象*/
export default {
	save(val, name = "todos") {
		window.localStorage.setItem(name, JSON.stringify(val));
	},
	read(name) {
		return JSON.parse(window.localStorage.getItem(name));
	}
}