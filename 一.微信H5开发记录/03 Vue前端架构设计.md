## Vue前端架构设计
* 架构设计
  * 目录结构的定义
    * api / assets / components / env / router / util
  * 公共函数的编写
    * util -> index.js 导出需要的处理函数
  * 开发规范的定义
    * 如添加author / description等注释
  * 环境设置、统一请求处理、错误机制处理、Loading机制统一处理
    * env -> 通过不同方式判断当前环境并导出不同的变量值
    * 在main中设置axios拦截器进行请求响应的统一处理
  * 组件封装
