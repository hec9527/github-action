const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {import("webpack").Configuration} */
const config = {
    mode: 'production',

    entry: '/src/index.js',

    output: {
        clean: true,
        path: path.resolve('dist'),
        filename: '[name]-[contenthash:6].js',
    },

    plugins: [new HtmlWebpackPlugin()],
};

module.exports = config;
