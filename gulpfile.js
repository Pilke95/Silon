const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer');


function buildStyles() {
    return src('sass/main.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['sass/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)