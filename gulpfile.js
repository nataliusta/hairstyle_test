const gulp = require('gulp');
//const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
//const postcss = require('gulp-postcss');
//const autoprefixer = require('autoprefixer');
//const browser = require('browser-sync');
//const csso = require('postcss-csso');
//const rename = require('gulp-rename');
//const htmlmin = require('gulp-htmlmin');
//const terser = require('gulp-terser');
//const squoosh = require('gulp-libsquoosh');
//const svgo = require('gulp-svgmin');
//const svgstore = require('gulp-svgstore');
//const del = require('del');
//const watch = require('gulp-watch');

gulp.task('sass-compile', function(){
    return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
})

// Watcher

const watcher = () => {
    gulp.watch('source/sass/**/*.scss', gulp.series(styles));
    gulp.watch('source/js/*.js', gulp.series(scripts));
    gulp.watch('source/*.html',gulp.series(html, reload));
  }

  // default

  /*export default gulp.series(
    clean,
    copy,
    copyImages,
    gulp.parallel(
      styles,
      html,
      scripts,
      svg,
      sprite,
      createWebp
    ),
    gulp.series(
      server,
      watcher
    ));*/

    gulp.task('default', gulp.series('sass-compile'));
