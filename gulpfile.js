const gulp = require('gulp');
//import plumber from 'gulp-plumber';
const sass = require ('gulp-sass');
import sourcemaps from 'gulp-sourcemaps';
//import postcss from 'gulp-postcss';
//import autoprefixer from 'autoprefixer';
//import browser from 'browser-sync';
//import csso from 'postcss-csso';
//import rename from 'gulp-rename';
//import htmlmin from 'gulp-htmlmin';
//import terser from 'gulp-terser';
//import squoosh from 'gulp-libsquoosh';
//import svgo from 'gulp-svgmin';
//import svgstore from 'gulp-svgstore';
//import del from 'del';
//import watch from 'gulp-watch';

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

  export default gulp.series(
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
    ));