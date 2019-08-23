const gulp = require("gulp");
const minify = require("gulp-minify");

/*
gulp.task('dist', function(){
  return gulp.src(['src/classes/*.js','src/*.js'])
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest('dist/js'))
});
*/
function minifyJs() {
    return gulp.src(['src/classes/*.js','src/*.js'])
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest('dist/js'))
}

function moveAssets() {
    return gulp.src(['assets/imgs/*.png'])
    .pipe(gulp.dest('dist/assets/imgs'))
}

gulp.task('dist', gulp.series(minifyJs,moveAssets));