import {
    resolve
} from 'path';
import webpack from 'webpack';
import objectAssignDeep from 'object-assign-deep';

import webpackCommonConfig from './webpack.config.common.babel.js';

const webpackDevConfig = {
    entry: {
        index: [
            // 开启react代码的模块热替换（HMR）
            'react-hot-loader/patch',

            // 为webpack-dev-server的环境打包好运行代码
            // 然后连接到指定服务器域名与端口
            'webpack-dev-server/client?http://localhost:8080',
            // 为热替换（HMR）打包好运行代码
            // only- 意味着只有成功更新运行代码才会执行热替换（HMR
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
    },
    output: {
        // 输出的打包文件，chunkhash与hot-loader不兼容
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),

        // 对于热替换（HMR）是必须的，让webpack知道在哪里载入热更新的模块（chunk）
        publicPath: '/'
    },

    devServer: {
        // 开启服务器的模块热替换（HMR）
        hot: true,
        // 输出文件的路径
        contentBase: resolve(__dirname, 'dist'),
        // 和上文output的"publicPath"值保持一致
        publicPath: '/',

        //启动gzip压缩
        compress: true,

        //当使用HTML5 History API，任意的 404 响应可以提供为 index.html 页面。通过传入以下启用
        //单页应用请求404时会定位到index.html
        historyApiFallback: true,
        noInfo: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.(jpe?g|png|gif)$/i,
            use: ['url-loader?limit=8000&name=images/[name].[ext]']
        }, {
            test: /\.(svg|woff|woff2|ttf|eot)$/i,
            use: ['file-loader?name=font/[name].[ext]']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
        new webpack.NamedModulesPlugin(),
    ],
};
const webpackConfig = objectAssignDeep({}, webpackCommonConfig, webpackDevConfig);

export default webpackConfig;
