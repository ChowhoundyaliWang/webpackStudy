
const path = require('path');

// 启用热更新的第 2 步
const webpack = require('webpack');

//导入安装的 html-webpack-plugin ———— 在内存中生成HTML页面的插件
// 只要是插件，都一定要放在 plugins 节点中去
const htmlWebpackPlugin = require('html-webpack-plugin');

// 这个配置文件，其实是一个JS文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports = {
	// 指定 入口 和 出口
	entry: path.join(__dirname, './src/main.js'),  // 入口 表示要使用webpack打包哪个文件
	output: {
		// 输出文件相关的配置
		path: path.join(__dirname, './dist'),  // 指定打包好的文件，输出到哪个目录中
		filename: 'bundle.js'   // 这是指定输出的文件的名称
	},
	devServer: {   //这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一点
		// webpack-dev-server --open --contentBase src --hot
		// --open 自动打开浏览器， --port 3000 将端口号设置为3000, 内容根路径 src, --hot 热更新
		open: true, // 自动打开浏览器
		port: 3000, 
		contentBase: 'src',
		hot: true  // 启用热更新的第 1 步
	},
	plugins: [  // 配置插件的节点
		new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象，这是启用热更新的第 3 步
		new htmlWebpackPlugin({   // 创建一个在内存中生成HTML页面的插件
			template: path.join(__dirname, './src/index.html'),  // 指定模板页面，将来会根据指定的页面路径，去生成内存中的 页面
			filename: 'index.html'  // 指定生成的内存中的页面的名字
		})
	],
	module: {  // 这个节点用于配置所有的 第三方模块 加载器
		rules: [  // 所有第三方模块的 匹配规则
			{  
				test: /\.css$/,
				use: ['style-loader', 'css-loader']  //配置处理.css文件的第三方loader 规则
			},
			{
				test: /\.less$/,
				use: [ 'style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpg|png|gif|bmp|jpeg)$/,  
				use: 'url-loader?limit=718022&name=[hash:8]-[name].[ext]'   // npm i url-loader file-loder -D  处理图片路径的loader
				// limit 给定的值是图片的大小，单位是 byte，如果引用的图片 大于或等于 给定的limit值， 则不会被转为base64的格式的字符串； 如果图片小于给定的limit值，则会被转为 base64的字符串
				// name 属性， 设置图片被编译好后的名称
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: 'url-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
}