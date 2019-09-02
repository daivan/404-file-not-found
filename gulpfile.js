const gulp = require("gulp");
const minify = require("gulp-minify");
const concat = require('gulp-concat');
/*
gulp.task('dist', function(){
  return gulp.src(['src/classes/*.js','src/*.js'])
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest('dist/js'))
});
*/
function minifyJs() {
    return gulp.src(['src/classes/*.js','src/main.js'])
    .pipe(minify({noSource: true}))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'))
}

function moveAssets() {
    return gulp.src(['assets/imgs/enemy.png','assets/imgs/robot.png','assets/imgs/groundSimple.png'])
    .pipe(gulp.dest('dist/assets/imgs'))
}

gulp.task('dist', gulp.series(minifyJs,moveAssets));