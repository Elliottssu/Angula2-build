module.exports = function (gulp, plugins) {
	gulp.task('compileAssets', function(cb) {
		plugins.sequence(
			['clean:dev','clean:angular2-js','clean:angular2-less'],
			['copy:angular2-less','typescript:dev'], 
			'less:dev',
      		'copy:dev',
			cb
		);
	});
};
