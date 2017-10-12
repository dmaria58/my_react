const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/build/Entry/reactEntry.js", 
    output: {
        path: __dirname + "/dist",
        filename: "react.js"
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
                    loaders: ["babel","jsx"]
                },
                exclude: /node_modules/
        }]
    }
};