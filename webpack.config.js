const path = require('path'); // 必要的，引入路径
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 引入vue的loader插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入模板插件，将编译好的文件注入模板里，并移动到输出目录下(dist)
const webpack = require('webpack')
module.exports = {
    mode: 'development', // 开发模式，编译的时候比较快
    entry: {
        app:'./src/main.js' // 入口文件的位置
    },
    output: {
        filename: '[name]_[hash:6].js', // 输出文件名字的格式
        path: path.join(__dirname,'./dist') // 输出的绝对路径
    },
    devtool: 'inline-source-map', // 浏览器报错了可以显示源码位置，不至于显示压缩好的码文，看不懂
    devServer: {
        contentBase: path.join(__dirname, "dist"), // 服务器读取资源的位置
        hot: true, // 开启热加载
        host:'127.0.0.1', 
        port:8088 
    }, // 配合package.json中scripts中dev指令，运行的时候会找到这里，但是热加载需要引用下面的插件
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js',
        }
    }, // 定义全局路径，例如在模块里import vue from 'vue'，就是在这里定义好了路径的
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }, // vue的loader可以解析.vue文件
            {
                test: /\.less$/,
                use: ['vue-style-loader','css-loader','less-loader']
            }, // 按照style,css,less的解析顺序写，可以解析less文件
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:6].[ext]'
                    }
                   } // 处理图片的loader,配置options,打包之后命名以（图片的名字+hash六位.图片的格式）命名
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(), // 创建vueloader插件的实例
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js.map'
        //   }),
        new webpack.NamedModulesPlugin(), // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
        new webpack.HotModuleReplacementPlugin(), // 创建模块热替换插件的实例
        new HtmlWebpackPlugin({
            template: './index.html'
        }) // 创建模板插件的实例，并指定模板
    ]
}