/*
 * @Author: 黄佳佳
 * @Date: 2021-04-14 21:23:14
 * @LastEditors: 黄佳佳
 * @LastEditTime: 2021-04-14 21:42:52
 * @Description: 
 */
const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    prompting(){
        return this.prompt([
            {
                type: "input",
                name: 'name',
                message:'your project name is:',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing(){
        // 把每一个文件都通过模板转换的方式编译到对应的路径
        const templates = [
            "package-lock.json",
            "package.json",
            'README.md',
            'src/api/',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/router',
            'src/store',
            'src/utils',
            'src/views/home/index.vue',
            'src/views/layout/index.vue',
            'src/App.vue',
            'src/main.js',
            'public/favicon.ico',
            'public/index.html'
        ]
        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}