var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');

gulp.task('sass', function () {
	return gulp.src(['./scss/*.scss','!./scss/common.scss'])
		.pipe(sass())
		.pipe(gulp.dest('./css/'))
});

gulp.task('watch', function () {
	return gulp.watch(['./scss/*.scss','!./scss/common.scss'], gulp.series('sass'));
});

gulp.task('server', function () {
	return gulp.src('/')
		.pipe(server({
			port: 9096,
			open: true,
			livereload: true,
			proxies:[
				{source: '/users/api/getBill',target:'http://localhost:3000/users/api/getBill'},
				{source: '/users/api/addBill',target:'http://localhost:3000/users/api/addBill'}
			]
		}))
});

// 开发命令
gulp.task('dev', gulp.parallel('watch','server'));