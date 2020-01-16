const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');

function loadCSS() {
  return gulp
    .src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function loadJS(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./sass/**/*.scss', loadCSS);
  gulp
    .watch(['./js/modules/*.js', './js/scripts.js'], loadJS)
    .on('change', browserSync.reload);
}

exports.style = loadCSS;
exports.script = loadJS;
exports.watch = watch;
exports.default = gulp.parallel(loadCSS, loadJS);
