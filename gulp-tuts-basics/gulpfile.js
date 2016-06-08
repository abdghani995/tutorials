var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

// Scripts Tasks
// uglifies

gulp.task('scripts',function(){
	gulp.src('routes/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('routes_min'))
})

// script Tasks second
gulp.task('styles',function(){
	/*gulp.src('css/*.css')
	.pipe(sass({
		style:'compressed'
	 }))
	.pipe(gulp.dest('css_min'))*/
	console.log("hello")
})

//watch task
//watch js
//watches for any changes and replects it back
gulp.task('watch',function(){
	gulp.watch('routes/*.js',['scripts']);
	//gulp.watch('routes/*.css',['styles']);
});

gulp.task('default',['scripts','styles','watch'])