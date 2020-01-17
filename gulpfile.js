const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');

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

function clean() {
  return del(['./css', './js/scripts-bundled.js']);
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.series([clean, loadCSS, loadJS]);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./sass/**/*.scss', loadCSS);
  gulp
    .watch(['./js/modules/*.js', './js/scripts.js'], loadJS)
    .on('change', browserSync.reload);
}

/* Build Tasks */

function cleanDist() {
  return del(['./dist']);
}

function build() {
  return gulp
    .src('./*.html')
    .pipe(
      usemin({
        css: [
          function() {
            return rev();
          },
          function() {
            return cssnano();
          },
        ],
        js: [
          function() {
            return rev();
          },
          function() {
            return uglify();
          },
        ],
      }),
    )
    .pipe(gulp.dest('./dist'));
}

exports.build = gulp.series(cleanDist, build);
exports.style = loadCSS;
exports.script = loadJS;
exports.watch = watch;
exports.default = gulp.parallel(clean, loadCSS, loadJS);
