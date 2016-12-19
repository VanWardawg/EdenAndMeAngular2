var gulp      = require('gulp'),
    ts        = require('gulp-typescript');
    less    = require('gulp-less'),
    server 		= require('gulp-server-livereload'),
    path = require('path'),
    minifyCss   = require('gulp-minify-css');
    
var usedPaths = {
    appJavascript: ['**/*.ts', '!node_modules/**/*.*'],
    appLess: ['./**/*.less', 'styles.less', '!node_modules/**/*.*']
}

var tsProject = ts.createProject('tsconfig.json'); // loads our configuration

gulp.task('ts', function () {
   var tsResult = tsProject.src(usedPaths.appJavascript) // load all files from our pathspecification
        .pipe(ts(tsProject)); // transpile the files into .js
    
    return tsResult.js.pipe(gulp.dest('')); // save the .js in the same place as the original .ts-file
});

gulp.task('less', function () {
  gulp.src(usedPaths.appLess)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minifyCss({compatibility: 'ie8'})) // see the gulp-less doc for more information on compatibilitymodes
        .pipe(gulp.dest(function(file) {
            return file.base; // because of Angular 2's encapsulation, it's natural to save the css where the scss-file was
    }));
});

gulp.task('watch', ['less'],function(){ // brackets makes sure we run less once before the watch starts
    gulp.watch(usedPaths.appLess, ['less']); // run the sass-task any time stuff in the appScss changes
});

gulp.task('webserver', function() {
  gulp.src('./') // This indicates the root of our server
    .pipe(server({
      livereload: {
        enable: true, // enables live-reload
        filter: function(filePath, cb) { // this function tells livereload what to ignore
          cb( !(/node_modules/.test(filePath)) &&  // ignore anything in node_modules
              !(/.*ts$/.test(filePath)) && // ignore changes to *.ts-files
              !(/gulpfile.js$/.test(filePath)) ); // ignore changes to gulpfile.js
        }
      },
      defaultFile: 'index.html',
      open: true      
    }));
});