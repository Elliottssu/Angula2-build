module.exports = function (gulp, plugins) {
	gulp.task('compileAssets', function(cb) {
		plugins.sequence(
			'clean:dev',
			['copy:css','typescript:dev'], 
			'less:dev',
      		'copy:dev',
			cb
		);
	});
};
