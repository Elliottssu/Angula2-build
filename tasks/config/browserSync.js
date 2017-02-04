module.exports = function (gulp, plugins, growl) {
  var browserSync = require('browser-sync').create(); 

 gulp.task('browserSync', function () {
  var files = [
    'assets/images/**/*',
    'assets/app/**/*',
    'assets/fonts/*',
  ];

  browserSync.init(files,{
     reloadDelay: 500,
     open:false,     //不自动打开
     port:"8889",    //browsersync端口
     proxy: "localhost:8888"     //使用本机地址
  })
 });
}