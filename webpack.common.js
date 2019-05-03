const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        // chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                        outputPath: 'images/' // 图片打包后存放的目录
                    }
                }]
            }, {
                test: /\.(svg|woff|woff2|ttf|eot)(\?.*)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        },
    }
};