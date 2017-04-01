import gulp from 'gulp';
import webpack from 'webpack-stream';
import webpackConfig from '../../webpack.config.babel';

/**
 * 开发环境
 */
gulp.task('js:dev', function() {
    webpackConfig.devtool = 'source-map'; // => sourceMap策略
    let indexjs = webpackConfig.entry.index;
    return gulp.src(indexjs)
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest('./dev'));

});