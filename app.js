const webpack = require('webpack');
const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const config = require('./webpack.config.test');
const proxyMiddleware = require('http-proxy-middleware');
const app = new Koa();
const compiler = webpack(config);
app.use(require('koa-webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
}));
app.use(require('koa-webpack-hot-middleware')(compiler));
app.use(serve(__dirname + '/page'));
app.use(router.routes());
app.listen(3000, function() {
	console.log('正常打开3000端口')
});
