'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var browserSync = require("browser-sync");
var babel = require('gulp-babel');
var react = require('gulp-react');
var browserify = require('gulp-browserify');

// Convert JSX and compile ES2015 to JavaScript
gulp.task('build', function () {
  return gulp.src('src/**/*.jsx')
      .pipe(react({
        es6module: true
      }))
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest('src'));
});

gulp.task('browserify', function () {
  return gulp.src('src/App.js')
      .pipe(browserify())
      .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(['src/**/*.jsx'], ['build', 'browserify']);
});

// Default Task
gulp.task('default', [], function (cb) {
    gulp.start('build', cb);
});

// Live Reload
gulp.task('browser', function (cb) {
    browserSync.init(null, {
        server: {
            baseDir: ['dist']
        },
        notify: false
    });
    gulp.watch([
        'dist/**/*.html',
        'dist/**/*.js',
        'dist/**/*.css'
    ], browserSync.reload);
});
