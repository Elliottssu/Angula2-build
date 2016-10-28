module.exports = function (gulp, plugins) {
	gulp.task('syncAssets:typescript', function(cb) {
		plugins.sequence(
			'clean:angular2-js',
			'typescript:dev',
			cb
		);
	});

	gulp.task('syncAssets:less', function(cb) {
		plugins.sequence(
			'clean:angular2-less',
			'copy:angular2-less',
			cb
		);
	});

	gulp.task('syncAssets:dev', function(cb) {
		plugins.sequence(
			'clean:dev',
			'less:dev',
			'copy:dev',
			cb
		);
	});
	
};
