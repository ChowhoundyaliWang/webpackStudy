// main.js 是我们项目的JS入口文件

// 导入jquery
// import *** from ***  是ES6中导入模块的方式
import $ from 'jquery'

// 使用import语法， 导入css样式表
import './css/index.css'

// 注意： webpack，默认只能打包处理 js 类型的文件，无法处理 其它的非 JS类型的文件
// 如果要处理非 js 类型的文件，需要手动安装一些 合适 第三方 loader 加载器
// 1. 如果想要打包处理 css 文件，需要安装 npm i style-loader css-loader -D
// 2. 打开webpack.config.js这个配置文件，在里面新增一个配置节点 module，它是一个对象； 在module对象上，有个rules属性，这个属性是数组，这个数组中，存放了 所有第三方文件的 匹配 和 处理规则


// 注意： webpack 处理第三方文件类型的过程
// 1.发现这个 要处理的文件不是JS文件，然后就去 webpack.config.js配置文件中，查找有没有对应的第三方 loader 规则
// 2.如果能找到对应的规则，就会调用 对应的 Loader 处理这种文件类型；
// 3.在调用loader的时候，是从后往前调用的；
// 4.当最后的一个 loader 调用完毕，会把 处理的结果，直接交给 webpack 进行打包合并，最终输出到bundle.js中去

import './css/index.less'
import './css/index.scss'

import 'bootstrap/dist/css/bootstrap.css'

// class关键字是ES6中提供的新语法，是用来实现 ES6 中 面向对象编程的方式
class Person {
	// 使用static关键字， 可以定义静态属性
	// 所谓的静态属性，就是 可以直接通过类名， 直接访问属性  Person.info
	// 实例属性： 只能通过类的实例，来访问的属性
	static info = { name: 'zs', age: 20 }
}

console.log(Person.info)

// 在 webpack 中，默认只能处理一部分 ES6的新语法， 一些更高级的ES6语法或者 ES7语法，webpack是处理不了的；这时候，就需要 借助第三方的loader，来帮助webpack处理这些高级的语法，当第三方loader 把高级语法转为 低级的语法之后，会把结果交给 webpack 去打包到 bundle.js

$(function(){
	$('li:odd').css('backgroundColor', 'pink');
	$('li:even').css('backgroundColor',  function(){
		return '#'+'ccc';
	});
})