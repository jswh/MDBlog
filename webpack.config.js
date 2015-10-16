var webpack = require("webpack");

module.exports = {
	entry: {
		main: './src/main.js',
	},
	output: {
		path: './build/lib',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: "babel", exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style!css!autoprefixer'},
			{ test: /\.scss/, loader: 'style!css!autoprefixer!sass'},
			{ test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
			{ test: /\.(html|tpl)$/, loader: "html-loader" }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};
