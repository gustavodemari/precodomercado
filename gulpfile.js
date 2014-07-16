var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-uglify');

gulp.task('angular', function(){
  gulp.src(['app/bower_components/angular/angular.min.js', 
            'app/bower_components/angular-route/angular-route.min.js'])
    .pipe(concat('angular.min.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/dist'))
})

gulp.task('libs', ['angular']);

gulp.task('app', function(){
  gulp.src('app/js/*.js')
    .pipe(concat('app.min.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/dist'))
});

gulp.task('build', ['libs', 'app']);