const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        overlay: true,
        compress: true,
        disableHostCheck: true, // solve "Invalid Host header"
        historyApiFallback: true // solve "Cannot GET /article"
    },
    output: {
        publicPath: '/' // solve "Cannot GET /article"
    },
    plugins: [
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                    exclude: [/\.min\.js$/gi]
                }
            )]
    },
});