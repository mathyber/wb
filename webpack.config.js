'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

var path = require('path');
module.exports = {
    entry: './home',
    mode:'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
        library: 'home'
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)

        })

    ]
};