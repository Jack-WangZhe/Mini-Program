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
* GUI创建:`vue ui`，使用GUI只能**管理**Vue3.0之后的项目
  * 可以通过GUI创建项目
  * 终止项目
  * 安装项目插件
  * 查看项目的运行依赖和开发依赖
  * 项目配置查看
  * 项目任务查看（可以运行、build、lint等等）
* 安装如下插件
  * axios@0.18.0
  * vue-axios@2.1.4
  * vue-cookie@1.1.4
  * vue-router@3.0.2
  * weixin-js-sdk@1.3.2

