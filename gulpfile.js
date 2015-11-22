var gulp = require('gulp');
var clean = require('gulp-clean');
var template = require('gulp-template');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var pkg = require('./package.json');

gulp.task('clean', function () {
  return gulp.src('dist/*', {read: false})
    .pipe(clean());
});

gulp.task('build-css', ['clean'], function() {
  return gulp.src('bootstrap-toc.css')
    .pipe(template(pkg))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('dist'));
});

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md
gulp.task('default', ['build-css']);
