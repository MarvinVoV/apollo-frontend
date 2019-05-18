const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        }),
        new BundleAnalyzerPlugin(),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                exclude: [/\.min\.js$/gi],
                parallel: true,
                uglifyOptions: {
                    output: {
                        comments: false,
                        beautify: false,
                    },
                    warnings: false,
                    compress: {
                        warnings: false, // Suppress uglification warnings
                        unused: true,
                        conditionals: true,
                        dead_code: true,
                        sequences: true,
                        if_return: true,
                        comparisons: true
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    }
});