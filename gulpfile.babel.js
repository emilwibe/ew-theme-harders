"use strict";

import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";
import cleanCSS from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import uglify from "gulp-uglify-es";
import sass from "gulp-sass";

sass.compiler = require("node-sass");

const paths = {
  css: [
    "./src/css/_fonts.scss",
    "./src/css/animations.scss",
    "./src/css/base.scss",
    "./src/css/layout.scss",
    "./src/css/state.scss",
    "./src/css/modules.scss"
  ],
  jsFooter: [
    "./src/js/footer/scripts.js"
  ]
}

const buildCSS = () => {
  return gulp.src( paths.css )
    .pipe( sourcemaps.init() )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( concat( "core.css" ) )
    .pipe(autoprefixer())
    .pipe( cleanCSS({compatibility: "*"}))
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( "./dist/css" ))
}

const jsFooter = () => {
  return gulp.src( paths.jsFooter )
    .pipe( sourcemaps.init() )
    .pipe( concat( "scripts-footer.js" ) )
    .pipe( uglify() )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( "./dist/js" ) )
}

// WATCH
const watchCSS = () => {
  gulp.watch( paths.css, gulp.series( buildCSS ) );
}


exports.default = gulp.series( buildCSS, jsFooter );
exports.watch = gulp.series( watchCSS );