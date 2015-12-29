var gulp = require('gulp');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

// run init tasks
gulp.task('default', ['dependencies', 'js', 'html', 'css']);

// run development task
gulp.task('dev', ['watch', 'serve']);

// run development task
gulp.task('tsc', ['typescript-compile', 'traceur']);

// serve the build dir
gulp.task('serve', function () {
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.css', ['css']);
});

// move dependencies into build dir
gulp.task('dependencies', function () {
  return gulp.src([
    'node_modules/systemjs/dist/system-csp-production.src.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/angular2/bundles/angular2.js',
    'node_modules/angular2/bundles/http.js',
    'node_modules/angular2/bundles/router.js',
    'node_modules/angular2/bundles/upgrade.js'
  ])
    .pipe(gulp.dest('build/lib'))
});

// transpile & move js
gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(rename({
      extname: ''
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('build'));
});

// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});

// move css
gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
});

var tsProject = ts.createProject('src/tsconfig.json');

gulp.task('typescript-compile', function () {
  var tsResult = tsProject.src() // instead of gulp.src(...)
    .pipe(sourcemaps.init()) // This means sourcemaps will be generated
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest('build'));
});

gulp.task('traceur', function () {
  return gulp.src('build/*.js')
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }));
});