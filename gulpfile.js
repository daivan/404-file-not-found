const gulp = require("gulp");
const minify = require("gulp-minify");
const concat = require('gulp-concat');

function minifyJs() {
    return gulp.src(['src/classes/*.js','src/main.js'])
    .pipe(minify({noSource: true}))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'))
}

function moveAssets() {
    return gulp.src(['assets/images/objects.png','assets/images/enemy.png','assets/images/robot.png','assets/images/ground.png'])
    .pipe(gulp.dest('dist/assets/images'))
}

gulp.task('dist', gulp.series(minifyJs,moveAssets));