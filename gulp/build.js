/**
 * 
 * A gulp module that helps you to make a distribution build for you web 
 * application
 * 
 * @type Module gulp|Module gulp
 */

var gulp = require('gulp'),
        sourcemaps = require('gulp-sourcemaps'),
        concat = require('gulp-concat'),
        del = require('del'),
        gutil = require('gulp-util'),
        uglify = require('gulp-uglify'),
        inject = require('gulp-inject'),
        copy = require('gulp-copy');


// Delete the whole dist folder
gulp.task('clean', function () {
    gutil.log('Deleting dist folder');
    del([gulp.paths.tmp + '/']);
    return del([gulp.paths.dist + '/']);
});

gulp.task('copy-html', function () {
    return gulp.src(gulp.paths.src + '/**.html')
            .pipe(gulp.dest(gulp.paths.tmp));
});

// Dumps all js source files into one big bundle.js file
gulp.task('build-js', ['clean'], function () {
    gutil.log('Preparing bundle');
    return gulp.src('src/app/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(concat('bundle.js'))
            .pipe(sourcemaps.write())
            .pipe(uglify())
            .pipe(gulp.dest(gulp.paths.tmp));
});

gulp.task('build-index', ['build-js', 'copy-html'], function () {
    return gulp.src(gulp.paths.tmp + '/**/*')
            .pipe(inject(gulp.src(gulp.paths.tmp + '/**/*.js', {read: false}), {relative: true}))
            .pipe(gulp.dest(gulp.paths.dist));
});
