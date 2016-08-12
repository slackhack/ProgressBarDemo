var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');


gulp.task('minify', function() {
   gulp.src('dist/js/demo.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
});

gulp.task('default', function() {
   return browserify('src/app.js')
      .transform(babelify,{presets: ["react"]})
      .bundle()
      .pipe(source('demo.js'))
      .pipe(gulp.dest('dist/js'));
});