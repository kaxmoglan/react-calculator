const gulp = require("gulp"),
  sass = require("gulp-dart-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  files = {
    sass: {
      src: "src/sass/**/*.scss",
      dest: "src",
    },
  };

// SASS

function styles() {
  return gulp
    .src(files.sass.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 4 versions"))
    .pipe(gulp.dest(files.sass.dest));
}

//WATCH

function watch() {
  gulp.watch(files.sass.src, styles);
}

// EXPORTS
exports.styles = styles;
exports.watch = watch;
