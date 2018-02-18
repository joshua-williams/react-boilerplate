const path = require('path');
module.exports = {
    entry: {
        app: path.join(__dirname, 'src/index.js')
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist/assets')
    },

    devServer: {
        port: 8888,
        inline: true,
        contentBase: path.join(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: [/(node_modules)/],
            loader: 'babel-loader',
            options: {presets: ['env', 'react']}
        }]
    }
}