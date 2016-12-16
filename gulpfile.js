'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const glob = require('gulp-sass-glob-import');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


gulp.task('sass', function() {
    return gulp.src('docs/components/**/*.scss')
        .pipe(glob())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss([autoprefixer({browsers: ['last 7 versions']})]))
        .pipe(gulp.dest('docs/components/'));
});

gulp.task('watch', function() {
    gulp.watch('docs/components/**/*.scss',
        gulp.series('sass'));
});
