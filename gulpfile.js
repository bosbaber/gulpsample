// grab our gulp packages
var gulp = require('gulp'),
        gutil = require('gulp-util');

// Set some paths that we will be using inside
// our gulp environment
gulp.paths = {
    src: 'src', //  Where our sources/assets are
    dist: 'dist', // The final distribution will be put here on build
    tmp: '.tmp'     // Templ folder for keeping things
};

// Import all .js files from the gulp folder
require('require-dir')('./gulp');

// create a default task and just log a message
gulp.task('default',['build-index'], function () {
    return gutil.log('Everything worked!');
});