var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    dest = require('gulp-dest'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    uncss = require('gulp-uncss'),
    minifyCss = require('gulp-minify-css');

//less
gulp.task('less', function () {
    gulp.src('less/style.less')
        .pipe(less())
        .pipe(autoprefixer('last 15 versions'))
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload())
        .pipe(notify('Done!'));
});

//media-less
gulp.task('media-less', function () {
    gulp.src('less/media.less')
        .pipe(less())
        .pipe(autoprefixer('last 15 versions'))
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload())
        .pipe(notify('Done!'));
});

//html
gulp.task('html', function(){
    gulp.src('index.html')
        .pipe(connect.reload());
})

//css
gulp.task('css', function(){
    gulp.src('css/style.css')
        .pipe(connect.reload());
})

//media-reload
gulp.task('media-reload', function(){
    gulp.src('css/media.css')
        .pipe(connect.reload());
})

//watch
gulp.task('watch', function(){
    gulp.watch('less/style.less', ['less'])
    gulp.watch('less/media.less', ['media-less'])
    gulp.watch('index.html', ['html'])
});

//connect
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

gulp.task('default', ['connect', 'html', 'less', 'watch', 'css', 'media-less', 'media-reload']);