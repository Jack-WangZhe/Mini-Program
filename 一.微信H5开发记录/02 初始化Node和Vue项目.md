## 初始化Node和Vue项目

> 项目构建版本：Vue@2.6.6 , Vue-Cli@3.0 , Node@9.10.0 > 8.9即可

 ### 一.工具安装

#### 1.Node安装

* 针对不同平台安装即可，不做详细介绍

#### 2.Node升级

* 通过`n`模块进行node的版本管理
* 使用流程
  * 安装`n`模块: `npm install -g n`
  * 查看`n`模块的版本: `n -V` 或 `n --version`
  * 安装稳定版本: `n stable`
  * 安装指定版本: `n 9.10.0`

#### 3.Vue-cli3.0安装

> Vue-cli使用文档: https://cli.vuejs.org

* 安装流程: `npm install -g @vue/cli`
* 或者通过yarn(新一代包管理工具)安装`yarn global add @vue/cli`
* 查看版本: `vue --version `或`vue -V`

#### 4.Vue创建项目方式

* 命令行创建: `vue create pay_share`
* GUI创建:`vue ui`