'use strict';

/**
 * Arquivo responsável por gerencias tarefas de performance no código
 *
 * @author Diego Hideky <diegohideky@gmail.com>
 */

let gulp         = require('gulp')
  , autoprefixer = require('gulp-autoprefixer')
  , browserSync  = require('browser-sync').create()
  , clean        = require('gulp-clean')
  , cleanCss     = require('gulp-clean-css')
  , htmlmin      = require('gulp-htmlmin')
  , rev          = require('gulp-rev')
  , sass         = require('gulp-sass')
  , scssLint     = require('gulp-sass-lint')
  , sourcemaps   = require('gulp-sourcemaps')
  , usemin       = require('gulp-usemin');

// Copia as imagens para a pasta dist
gulp.task('copy', ['clean'], _ => gulp.src('src/img/**/*').pipe(gulp.dest('dist/img')));

// Limpa a pasta dist
gulp.task('clean', _ => gulp.src('dist').pipe(clean()));

// Minimifica o html e troca as importações de css para min.css e coloca na pasta dist
gulp.task('usemin', ['min-css'], _ =>
  gulp.src('src/*.html')
    .pipe(usemin({
      css: [ rev() ],
      html: [ htmlmin({ collapseWhitespace: true }) ],
      inlinecss: [ cleanCss() ]
    }))
    .pipe(gulp.dest('dist/'))
);

// minimifica a pasta dist
gulp.task('min-css', ['autoprefixer'], _ =>
  gulp.src('src/css/quero-styles.css')
  .pipe(cleanCss())
  .pipe(gulp.dest('src/css'))
);

// insere prefixos de versões anteriores dos browsers
gulp.task('autoprefixer', ['sass'], _ =>
  gulp.src('src/css/quero-styles.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
);

// pré-processa o css com sass
gulp.task('sass', _ =>
  gulp.src("src/scss/quero-styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream())
);

// analisa a semantica do sass
gulp.task('sass-lint', _ =>
  gulp.src('/src/scss/*.scss')
    .pipe(scssLint())
    .pipe(scssLint.format())
    .pipe(scssLint.failOnError())
);

// Realiza as tarefas para processar o css, autoprefixar e minimizar css e html
gulp.task('default', ['copy'], _ => gulp.start('min-css', 'usemin'));

/**
 * Gera um servidor em localhost:300 e a qualquer alteração no código
 * é analisado a semntica dos aquivos .scss e minimificado o arquivo .css
 * e feito reload da página no Browser
 */
gulp.task('serve', ['min-css'], _ => {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });

  // Verifica mudanças nos arquivos .scss
  gulp.watch("src/scss/*.scss").on('change', _ => {
    gulp.start('sass-lint');
    gulp.start('min-css');
  });

  // Verifica mudanças em todos os arquivos
  gulp.watch("src/**/*").on('change', browserSync.reload);
});
