const
  gulp = require("gulp"),
  sass = require("gulp-sass"),
  cleanCSS = require("gulp-clean-css"),
  concat = require("gulp-concat"),
  concatCSS = require("gulp-concat-css"),
  autoprefixer = require("gulp-autoprefixer"),
  cssimport = require("gulp-cssimport"),
  rename = require("gulp-rename"),
  git = require("gulp-git"),
  paths = {
    scss: [
      "./src/css/_fonts.scss",
      "./src/css/base.scss",
      "./src/css/layout.scss",
      "./src/css/animations.scss",
      "./src/css/modules.scss",
      "./src/css/state.scss",
      "./src/css/theme.scss"
      ],
    jsHeader: [
    ],
    jsFooter: [
      "./src/js/footer/scripts.js",
    ],
    git: [
      "./",
      "!./node_modules"
    ]
  }
;
sass.compiler = require("node-sass");

gulp.task('css', function(){
  return gulp.src(paths.scss)
    .pipe(concatCSS("core.css"))
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["cover 99.5% in DK"], /*https://github.com/browserslist/browserslist*/
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: "*"}))
    .pipe(gulp.dest("./dist/css"))
});

gulp.task("jsF", function(){
  return gulp.src(paths.jsFooter)
    .pipe(concat("scripts-footer.js"))
    .pipe(gulp.dest("./dist/js"))
});

// git
gulp.task("git-add", function(){
  return gulp.src(paths.git)
    .pipe(git.add())
});
gulp.task('git-commit', function(){
  return gulp.src(paths.git)
    .pipe(git.commit('s'));
});
gulp.task('git-push', function(done){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
  done();
});

gulp.task("git-all", gulp.series("git-add", "git-commit", "git-push"));

gulp.task("default", gulp.series("css", "jsF", "git-all"));