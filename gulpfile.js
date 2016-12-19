'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const glob = require('gulp-sass-glob-import');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const pug = require('gulp-pug');

// SCSS
gulp.task('sass', function() {
    return gulp.src('docs/components/**/*.scss')
        .pipe(glob())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss([autoprefixer({browsers: ['last 7 versions']})]))
        .pipe(gulp.dest('docs/components/'));
});

// SCSS WATCH
gulp.task('watch', function() {
    gulp.watch('docs/components/**/*.scss',
        gulp.series('sass'));
});

// PUG
gulp.task('views', function () {
    return gulp.src('docs/components/**/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('docs/components/'));
});

gulp.task('index', function() {
    return gulp.src('docs/index.pug')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('docs/'));
});
