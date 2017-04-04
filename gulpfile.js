var gulp = require('gulp'),
	open = require('gulp-open'),
	connect = require('gulp-connect'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');

//CONFIG
var config = {
	path: {
		src: {
			html: './src/*.html',
			css: './src/css/style.scss',
			js: './src/js/app.js',
			jswatch: './src/js/**/*.js'
		},
		dest: './dest'
	},
	localServer: {
		port: 8001,
		url: 'http://localhost:8001/'
	}
};

// HTML
gulp.task('html', function() {
	gulp.src(config.path.src.html)
	.pipe(gulp.dest(config.path.dest))
	.pipe(connect.reload());
});

// CSS
gulp.task('css', function(){
	return gulp
	.src(config.path.src.css)
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(config.path.dest))
	.pipe(connect.reload());
});

// browserify
gulp.task('browserify', function() {
	return browserify({entries: config.path.src.js,/* extensions: ['.js'],*/ debug: true})
	.transform(babelify/*, {presets: ['es2015', 'react']}, 'minifyify'*/)
	.bundle()
	// Передаем имя файла, который получим на выходе, vinyl-source-stream
	.on('error', function(err){ // from SO
	// print the error (can replace with gulp-util)
	console.log(err.message);
	// end this stream
	this.emit('end');
	})
	.pipe(source('build.js'))
	.pipe(buffer())
	.pipe(gulp.dest(config.path.dest))
	.pipe(connect.reload());
});

// CONNECT
gulp.task('connect', function () {
	connect.server({
		root: './dest',
		port: config.localServer.port,
		livereload: true
	});
});

// BUILD
gulp.task('build', [
	'html',
	'css',
	'browserify'
]);

// OPEN
gulp.task('open', function(){
	gulp.src('./dest/index.html')
	.pipe(open({uri: config.localServer.url}));
});

// WATCH
gulp.task('watch', function () {
	gulp.watch(config.path.src.html, ['html']);
	gulp.watch(config.path.src.css, ['css']);
	gulp.watch(config.path.src.jswatch, ['browserify']);
});

// DEFAULT
gulp.task('default', ['build', 'connect', 'open', 'watch']);