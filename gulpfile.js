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
const pug = require('pug');
const gpug = require('gulp-pug');

// Init Utils
const path = require('path');
const fs = require('fs');

/**
 * Task Sass
 */
gulp.task('sass', function() {
    return gulp.src('docs/components/**/*.scss')
        .pipe(glob())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss([autoprefixer({browsers: ['last 7 versions']})]))
        .pipe(gulp.dest('docs/components/'));
});

/**
 * Watch Sass
 */
gulp.task('watch', function() {
    gulp.watch('docs/components/**/*.scss',
        gulp.series('sass'));
});

/**
 * Task Pug *.tpl.js
 * info: function name = filenameTpl
 */
gulp.task('views', function() {
    return gulp.src('docs/components/**/*.tpl.pug')
        .on('data', function(file) {
            let jsString = pug.compileFileClient(file.path,
                {name: `${path.basename(file.path).slice(0, -8)}Tpl`});
            fs.writeFileSync(file.path.slice(0, -4) + '.js', jsString);
        });
});

/**
 * Task Pug index.html
 */
gulp.task('index', function() {
    return gulp.src('docs/index.pug')
        .pipe(gpug({pretty: true}))
        .pipe(gulp.dest('docs/'));
});
