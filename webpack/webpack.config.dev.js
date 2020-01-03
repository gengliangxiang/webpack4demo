const merge = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const common = require('./webpack.config.common.js');
module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '/src',
		hot: true,
		// host:'10.119.132.151'
	},
	plugins: [
		new StyleLintPlugin({
			fix: true,
			files: ['src/**/*.scss'],
			failOnError: false,
			quiet: true,
			syntax: 'scss',
			cache: true,
		}),
	]
});
