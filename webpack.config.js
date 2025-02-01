const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        filename: './src/new.ts',
        use: 'ts-loader',
        // exclude: /node_modules/,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test:/\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(png|svg|jpeg|jpg|gif)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }
}