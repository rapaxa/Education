const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

gulp.task('clean', function(cb) {
    del(['dist/*']);
    cb();
})

gulp.task('sass', function(cb) {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
    cb();
})
gulp.task('copy:html',function (cb){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
    cb();
})
gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html','./src/**/*.scss'], gulp.series(['clean', 'sass','copy:html']));
})

gulp.task('default', gulp.series(['clean', 'sass','copy:html']))