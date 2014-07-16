var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-uglify');

gulp.task('js', function(){
  gulp.src('app/js/*.js')
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/dist'))
});