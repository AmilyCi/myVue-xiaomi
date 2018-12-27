const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'production',
    entry: {
        app:'./src/main.js' // 入口文件的位置
    },
    output: {
        filename: 'app.bundle.js', // 输出文件名字的格式
        path: path.join(__dirname,'./dist') // 输出的绝对路径
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}