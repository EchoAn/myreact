import {
    resolve
} from 'path';
import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from "extract-text-webpack-plugin";

//判断开发环境
const NODE_ENV = process.env.NODE_ENV || 'development';
console.log("当前运行环境：", NODE_ENV)

//公共css文件提取
const ExtractTextPluginCss = new ExtractTextPlugin({
    filename: 'styles/style.[contenthash:8].css',
});

//html模板
const HtmlTemplatePlugin = new HtmlWebpackPlugin({
    title: 'GPlusCards',
    template: './src/index.html',
    inject: 'body',
    favicon: ''
});

//公共chunk
const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    names: ['libs-react', 'libs-main'], //chunkhash在idnex变化的时候会引起最后一个文件的hash变化,因此较小的文件放到最后面比较好
});

export default {
    entry: {
        'libs-main': ['redux', 'react-redux', 'redux-thunk', 'react-router-dom', 'react-fontawesome'],
        'libs-react': ['react', 'react-dom']
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', 'css'],
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPluginCss.extract({
                fallback: [{
                    loader: 'style-loader',
                }],
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    },
                }, {
                    loader: 'postcss-loader',
                }],
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: [{
                    loader: 'style-loader',
                }],
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    },
                }, {
                    loader: 'postcss-loader',
                }, {
                    loader: 'sass-loader',
                }]
            })
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        }]
    },
    plugins: [
        CommonsChunkPlugin,
        HtmlTemplatePlugin,
        //提取公共css
        ExtractTextPluginCss,

        // env为production可以保证react、redux在生产环境调用生产代码
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            },
        }),
    ],
}