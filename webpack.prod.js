const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
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