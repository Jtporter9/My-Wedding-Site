var gulp = require('gulp')
  , addsrc = require('gulp-add-src')
  , coffee = require('gulp-coffee')
  , uglify = require('gulp-uglify')
  , cleanCSS = require('gulp-clean-css')
  , less = require('gulp-less')
  , path = require('path')
  , watch = require('gulp-watch')
  , imagemin = require('gulp-imagemin')


gulp.task('build', function() {
  return gulp.src('files/coffee/*.coffee')   // start with the .coffee files in the project
  	.pipe(coffee())                          // compiles coffee script
  	.pipe(addsrc('./*.js'))           // we use addsrc to add our .js files to the mix
  	.pipe(uglify())                          // we minify everything
  	.pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
  return gulp.src('./*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-css', function() {
  return gulp.src('./dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-pics', () =>
	gulp.src('./pics/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);


//HAVENT USED YET PROBABLY SHOULD FOR MORE STYLING CHANGES

// gulp.task('stream', function () {
//     return gulp.src('css/**/*.css')
//         .pipe(watch('css/**/*.css'))
//         .pipe(gulp.dest('build'));
// });
//
// gulp.task('callback', function (cb) {
//     watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(watch('css/**/*.css'))
//             .on('end', cb);
//     });
// });
//https://www.npmjs.com/package/gulp-watch/
