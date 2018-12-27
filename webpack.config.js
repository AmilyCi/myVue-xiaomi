const {join:pathJoin} = require('path');
module.exports = {
    entry:{
        app:'./src/main.js' // 入口文件的位置
    },
    output:{
        filename:'app.bundle.js', // 输出文件名字的格式
        path:pathJoin(__dirname,'./dist') // 输出的绝对路径
    },
}