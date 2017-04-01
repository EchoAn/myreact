
import gulp from 'gulp';
import sequence from 'gulp-sequence';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import autoresponse from 'autoresponse';

import utils from './utils';
import webpackConfig from '../webpack.config.babel';

let browserSync = require('browser-sync').create();
global.browserSync = browserSync;

function loadingCompiler() {
    if (!webpackConfig.plugins) {
        webpackConfig.plugins = [];
    }
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    webpackConfig.devtool = 'source-map';

    const webpackClient = 'webpack-hot-middleware/client?reload=true';

    for (let key in webpackConfig.entry) {
        webpackConfig.entry[key].unshift(webpackClient);
    }

    return webpack(webpackConfig);
}

gulp.task('server', ['dev'], function() {

    let compiler = loadingCompiler();

    browserSync.init({
        server: "./dev/index.html",
        port: 8000,
        open: false,
        middleware: [
            webpackDevMiddleware(compiler, {
                hot: true,
                quiet: false,
                historyApiFallback: true,
                stats: {
                    colors: true
                },
                watchOptions: {
                    aggregateTimeout: 300,
                    poll: 1000
                },
                publicPath: webpackConfig.output.publicPath
            }),
            webpackHotMiddleware(compiler),
            // getAutoResponse()
        ],
        ui: {
            port: 8001,
            weinre: {
                port: 8002
            }
        }
    });

    function getAutoResponse() {
        return autoresponse({
            responseDir: './mock',
            logLevel: 'info',
            post: true,
            get: {
                match: function (reqPathName) { // mock all `/xx/xx` path
                    return !/\.\w+(\?.*)?$/.test(reqPathName);
                }
            }
        });
    }

});

