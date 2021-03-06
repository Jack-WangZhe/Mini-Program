## 公众号及IDE准备

### 一.前期准备

#### 1.公众号开发准备

* 注册公众号（订阅号、小程序、服务号、测试号）
* 下载开发工具

#### 2.公众号注册

* 服务号（企业）
* 订阅号（媒体和个人）
* 小程序

#### 3.服务号和订阅号差异

* 服务号侧重于服务，订阅号侧重于咨询
* 订阅号每天可以群发一次，服务号每月可以发表四次
* 服务号主要适用于媒体、企业、政府，订阅号还适用于个人
* 订阅号不支持支付，服务号可以申请支付

#### 4.开发者工具

* 开发者文档
* 在线接口调试工具
* web开发者工具（用来在PC端显示项目运行效果，需要绑定开发者微信号）
* 公众平台测试账号（不用注册订阅号和服务号就可以实现分享功能）
  * 测试号注册链接 https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login
  * 使用测试号会自动生成测试号的appID和appsecret
    * 接口配置信息：当关注订阅号和服务号后，向订阅/服务号发送信息，信息会被转发到对应URL上进行处理，从而响应用户
    * JS接口安全域名：做微信分享和支付，必须使用JS接口的安全域名

### 二.微信授权流程

#### 1.概念理解

* 业务域名、JS接口安全域名、网页授权域名【在公众号设置->功能设置 里面】
  * 业务域名：如果没有配置业务域名，当页面有input输入框时会有提示“防欺诈盗号，请勿支付或输入qq密码“
  * JS接口安全域名：微信JSSDK暴露大量接口，用于客户端调用，如果希望调用对应API则需要配置JS接口安全域名，如果不配置接口安全域名则无法调用微信API
  * 网页授权域名：使用微信授权时需要设置授权的回调域名
* 开发者工具（添加开发者微信号）、人员设置（添加运营者微信号）
  * 在人员设置里设置管理员信息
  * 在人员设置里设置运营者管理，其中可以绑定运营者微信号
  * 开发者工具，绑定Web开发者工具，从而设定开发者微信号
* 网页授权access_token和普通access_token
* UnionID
  * 一个用户访问一个应用就会存在一个不同的OpenId，即一个用户访问公众号、服务号、小程序都会有一个不同的OpenId
  * 同一个用户在访问公众号、服务号、小程序只存在同一个UnionID

#### 2.授权流程

* 用户同意授权，获取code
* 通过code换取网页授权access_token
* 拉取用户信息（需scope为snsapi_userinfo）
* 授权方式
  * 静默授权：不需要用户感知的授权，只需要获取OpenID
  * 用户信息授权：需要获取**用户信息**，需要用户点击授权

#### 3.JSSDK调用流程

* 绑定域名
* 引入JS文件（可以在index.html中引入JSSDK的js文件或通过引入jssdk插件包的形式引入）
* 通过config接口注入权限验证配置（接口签名）
* 通过ready接口处理成功验证

