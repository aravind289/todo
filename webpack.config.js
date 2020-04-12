const path = require('path')


const HTMLplugin = require('html-webpack-plugin')


module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    }
    ,
    plugins: [
        new HTMLplugin({
            title: "sample html ",
            template: 'src/index.html'
        })
    ],
    devServer: {
        port: 8088, //server on which localhost has to run
        contentBase: path.resolve(__dirname, 'build') // this specifies base folder from where the dev-server would serve the application and its contents

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader',
                loader: 'css-loader'

            },
            {
                test: /.(png|svg|jpg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            },

        ]
    }
    ,
    mode: 'development'
}