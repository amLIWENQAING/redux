var path = require('path');
var webpack = require("webpack");
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: "/build"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-3'],
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.svg/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        port: 3000,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}
