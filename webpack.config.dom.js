const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/build/Dom/reactDomentry.js", 
    output: {
        path: __dirname + "/dist",
        filename: "react_dom.js"
    },
    devtool: 'none',
    devServer: {
        contentBase: "./public", 
        historyApiFallback: true, 
        inline: true,
        hot: true
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
        }]
    }
};