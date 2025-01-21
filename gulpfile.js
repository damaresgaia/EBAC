const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compilar SASS e minificar CSS
gulp.task('styles', () => {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'));
});

// Compressão de imagens
gulp.task('images', () => {
    return gulp.src('./src/images/**/*.{jpg,jpeg,png,svg,gif}')
        .pipe(imagemin())
        .on('data', (file) => {
            console.log('Imagem processada:', file.relative);
        })
        .pipe(gulp.dest('./dist/images'));
});

// Compressão de código JavaScript
gulp.task('scripts', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// Tarefa padrão para executar todas as tarefas
gulp.task('default', gulp.parallel('styles', 'images', 'scripts'));

