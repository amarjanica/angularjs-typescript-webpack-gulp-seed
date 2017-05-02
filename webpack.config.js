const path = require('path');
const webpack = require('webpack');
function isExternal(module) {
    return ['bower_components', 'node_modules'].some(function (element) {
        return typeof module.userRequest === 'string' &&
            module.userRequest.indexOf(element) != -1
    });
}

module.exports = {
    entry: './src/app/app.ts',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            // Related to issue https://github.com/webpack/webpack/issues/2049
            // Use exports-loader for libraries not adjusted for CommonJS
            {loader: 'exports-loader?window.angular', test: /[\/]angular\.js$/},
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['src', './node_modules/', './bower_components/'],
        descriptionFiles: ['./package.json', './bower.json'],
        mainFields: ['main', 'browser'],
        mainFiles: ['index']
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jQuery',
            'jQuery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: isExternal
        })
    ]
};
