const   gulp = require("gulp"),
        sass = require("gulp-sass"),
        concatCSS = require("gulp-concat-css"),
        cleanCSS = require("gulp-clean-css"),
        concat = require("gulp-concat"),
        minify = require("gulp-minify")
;

gulp.task("css", function(){
    return gulp.src("./src/**/*.css")
        .pipe(concatCSS("core-styles.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./dist"))
});

gulp.task("js-head", function(){
    return gulp.src("./src/js/header/**/*.js")
        .pipe(concat("core-head.js"))
        .pipe(minify())
        .pipe(gulp.dest("./dist"))
});

gulp.task("js-footer", function(){
    return gulp.src("./src/js/footer/**/*.js")
        .pipe(concat("core-footer.js"))
        .pipe(minify())
        .pipe(gulp.dest("./dist"))
});

gulp.task("default", ["css", "js-head", "js-footer"]);