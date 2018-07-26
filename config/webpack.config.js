module.exports = {
    entry: '../src/index.js',
    output: {
        path: __dirname,
        filename: '../bundle.js',
    },
    module: {
        rules: [{
            test: function (path) {
                return /\.css$/.test(path) && !/quill\.(core|snow)\.css$/.test(path)
            },
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]--[local]--[hash:base64:5]',
                        sourceMap: true
                    }
                }
            ]
        }]
    }
}
