module.exports = function (gulp, plugins) {
	gulp.task('default', function(cb) {
		plugins.sequence(
			'compileAssets',
		    ['watch:angular2-typescript','watch:angular2-less','watch:dev', 'browserSync'],
			cb
		);
	});
};
