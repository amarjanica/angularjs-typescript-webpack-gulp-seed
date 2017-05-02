const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const webpack = require('webpack');
const bower = require('gulp-bower');
var express = require('express');
var app = module.exports.app = exports.app = express();

gulp.task('bower', function () {
    return bower({ cmd: 'update' });
});

gulp.task('webpack', ['bower'], function (done) {
    return webpack(require('./webpack.config.js'), function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }

        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));

        done();
    });
});

gulp.task('server', ['webpack'], function (done) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, './src', 'index.html'));
    });
    app.get(/^\/(.+).html$/, function (req, res) {
        res.sendFile(path.join(__dirname, './src/app', req.params[0] + '.html'));
    });
    app.use('/bower_components', express.static('bower_components'));
    app.use('/dist', express.static('dist'));
    app.listen(8080);
    gutil.log('Started webserver at http://localhost:8080')
});

gulp.task('default', ['bower', 'webpack'], function () {

});
