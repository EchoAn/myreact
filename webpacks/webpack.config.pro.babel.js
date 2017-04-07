import {
    resolve,
    join,
} from 'path';
import objectAssignDeep from 'object-assign-deep';


import webpackCommonConfig from './webpack.config.common.babel';

const webpackProConfig = {
    entry: {
        index: [
            'babel-polyfill',
            './src/index.js',
        ],
    },
    output: {
        // 输出的打包文件，chunkhash与hot-loader不兼容
        filename: '[name].[chunkhash:8].js',
        path: resolve(__dirname, '../dist'),
        // 编译文件引入时的路径,join会保留结尾的/，因此用join
        publicPath: join(__dirname, '../dist/'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', 'css'],
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(jpe?g|png|gif)$/i,
            use: ['url-loader?limit=8000&name=/images/[name].[hash:8].[ext]'],
        }, {
            test: /\.(svg|woff|woff2|ttf|eot)$/i,
            use: ['file-loader?name=/font/[name].[hash:8].[ext]'],
        }],
    },
    performance: {
        // 文件超过一定大小报警，默认250000
        hints: 'warning',
    },
    plugins: [],
};

const webpackConfig = objectAssignDeep({}, webpackProConfig, webpackCommonConfig);

export default webpackConfig;
