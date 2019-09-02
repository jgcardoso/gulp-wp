'use strict';
 

const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");


// CSS task
function css() {
  return gulp
    .src("./*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./"))
}

// Watch files
function watchFiles() {
  gulp.watch("./sass/**/*", css);
}

// define complex tasks
const build = gulp.series(gulp.parallel(css));
const watch = gulp.parallel(watchFiles);

// export tasks
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;


