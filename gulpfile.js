const   gulp = require("gulp"),
        sass = require("gulp-sass"),
        concatCSS = require("gulp-concat-css"),
        cleanCSS = require("gulp-clean-css")
;

gulp.task("css", function(){
    return gulp.src("./src/**/*.css")
        .pipe(concatCSS("core-styles.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./dist"))
});

gulp.task("default", ["css"]);