'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var nodemon     = require('gulp-nodemon');

// Static Server + watching scss/html files
gulp.task('serve',['sass'], function() {

  browserSync.init({
      server: "./public",
      port: 3001
  });

  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);

  return gulp.src("scss/styles.scss")
  .pipe(sass())
  .pipe(gulp.dest("public/css"))
  .pipe(browserSync.stream());

});

gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {

  return gulp.src("scss/styles.scss")
  .pipe(sass())
  .pipe(gulp.dest("public/css"))
  .pipe(browserSync.stream());

});

gulp.task('default', ['nodemon', 'serve']);