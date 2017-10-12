var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

module.exports = {
    entry: __dirname + "/test/_test_.js", 
    output: {
        path: __dirname + "/page",
        filename: "test.js"
    },
   module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer'])
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loaders: ['style', 'css', 'autoprefixer', 'less'],
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass'])
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['babel-loader','jsx'] 
        }]
    }
};