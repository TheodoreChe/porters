'use strict';

// Init Gulp
const gulp = require('gulp');

// Init Sass
const sass = require('gulp-sass');
const glob = require('gulp-sass-glob-import');

// Init Post Css
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Init Pug
const pug = require('gulp-pug');

// Init Utils
const print = require('gulp-print');

// Task Sass
gulp.task('sass', function() {
    return gulp.src('docs/components/**/*.scss')
        .pipe(glob())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss([autoprefixer({browsers: ['last 7 versions']})]))
        .pipe(gulp.dest('docs/components/'));
});

// Watch Sass
gulp.task('watch', function() {
    gulp.watch('docs/components/**/*.scss',
        gulp.series('sass'));
});

// Task Pug panel.tpl.js
gulp.task('views', function() {
    return gulp.src('docs/components/panel/panel.tpl.pug')
        .pipe(pug({name: 'panelTpl', client: true}))
        .pipe(gulp.dest('docs/components/panel/'));
});

// Task Pug index.html
gulp.task('index', function() {
    return gulp.src('docs/index.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('docs/'));
});
