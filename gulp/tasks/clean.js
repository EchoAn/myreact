import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean:dev', () => {
    return gulp.src('./dev', {read: false})
        .pipe(clean());
});