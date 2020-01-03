// css 配置
const styleLoader = {
	loader: 'style-loader',
};
const cssLoader = {
	loader: 'css-loader',
	options: {
		modules: true, // webpack3 为 module
		sourceMap: true,
		importLoaders: 2, //importLoaders代表import进来的资源；2代表css-loader后还需要使用几个loader
		localIdentName: '[path][name]__[local]--[hash:base64:5]',
	},
};
const postCssLoader = {
	loader: 'postcss-loader',
};
const sassLoader = {
	loader: 'sass-loader',
	options: {
		sourceMap: true,
	},
};
const lessLoader = {
	loader: 'less-loader',
};
exports.loadersConfig = {
	styleLoader,
	cssLoader,
	postCssLoader,
	sassLoader,
	lessLoader,
};
// css 配置
