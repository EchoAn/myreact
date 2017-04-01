import gulp from 'gulp';
import sequece from 'gulp-sequence';

gulp.task('dev', sequece(
    ['clean:dev'],
    ['js:dev']
));