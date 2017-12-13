# v2ex-frontend

> A V2EX clone frontend project using Vue.js v2.0 and v2ex's api

## Demo

项目 Demo 请访问: <http://v2ex.liuzhen.me/>

## 更新 Vue.js from 1.x to 2.0

项目升级更新详情: <https://github.com/liuzhenangel/v2ex_frontend/commit/8bc0a8d87728e9e08f9207ebe0ff6e806cc704f2>

第一步, 安装 [vue-migration-helper](https://github.com/vuejs/vue-migration-helper) 工具.


``` sh
# install
npm install --global git://github.com/vuejs/vue-migration-helper.git

# navigate to a Vue 1.x project directory
cd path/to/my-vue-project

# scan all files in the current directory
vue-migration-helper
# scan all files in specific sub-directories
vue-migration-helper src folder-a folder-b
```


第二步, 根据提示信息修改文件中对应的地方.

![Screenshot](http://i.imgur.com/aHh5TfR.png)

## 支持服务端渲染

代码更改详情: <https://github.com/liuzhenangel/v2ex_frontend/commit/127d7235cb36422d83aa1bd242085c909d8608ee>

服务端渲染文档: <http://vuefe.cn/guide/ssr.html>

支持服务端渲染主要修改的是加一个中间件 `server.js`, 有一个需要注意的地方是配置服务端渲染后 `vue-resource` 加载时会报一个 `document is not defined` 错误, 错误详情可以查看这个 [Issue](https://github.com/vuejs/vue-resource/issues/455), 处理这个问题的方法是:

把这两行代码

```javascript
import VueResource from 'vue-resource'

Vue.use(VueResource)
```

改成下面的方式

```javascript
const inBrowser = typeof window !== 'undefined'

if (inBrowser) {

   Vue.use(require('vue-resource'))

}
```

另外一个注意点是: 支持服务端渲染一些 package 的版本要升级, 具体可以查看 [更改详情](https://github.com/liuzhenangel/v2ex_frontend/commit/127d7235cb36422d83aa1bd242085c909d8608ee) 中的 `package.json` 文件

## 项目介绍

v2ex_frontend 项目是一个利用 vue.js 和 v2ex api 实现的 V2EX 社区克隆项目, 主要目的是为了学习 vue.js, 很适合学习 vue.js 的朋友参考.

这是一个前后端分离项目, 前端主要是 vue.js 和 vue-router, css 框架使用了 uikit. 后端利用 v2ex 开放的 api. 支持响应式布局.

## 核心技术框架

* vue.js
* uikit
* lodash
* vue-paginate
* vue-router

## 系统依赖

* Node ( >= 6.5 )
* npm ( >= 3.10.6 )

## 开发环境准备

第一步, 安装项目依赖

```bash
$ npm install
```


第二步, 启动服务

```bash
serve with hot reload at 127.0.0.1:8000

$ npm run dev
```

第三步, 浏览器访问: <http://127.0.0.1:8000>, 注意, 不能用 localhost 去访问, 这里利用反代跳过了 v2ex api 的跨域问题.

结束.

## 如何发布?

第一步, 配置nginx

先根据项目里的 `/config/nginx.conf.example` 文件, 修改其中的配置, 然后将文件复制到你的服务器上 nginx 所在目录的 `/etc/nginx/conf.d` 目录下, 命名为 xxx.conf 的文件. 然后重启 nginx.


第二步, 在 `package.json` 文件中添加 一条 deploy 命令放在 scripts 下.

参考: "deploy": "node build/build.js && scp -r dist/ 服务器用户名@服务器域名:~/项目所在目录/"


第三步, 发布

```bash
$ npm run deploy
```

## 学习参考资料
vue.js 2.0 中文文档: <http://vuefe.cn/guide/>

vue.js 2.0 英文文档: <http://rc.vuejs.org/guide/installation.html>

vue-router 2.0 文档: <http://router.vuejs.org>

vue.js 1.0 文档: <https://vuejs.org.cn/guide/overview.html>

lodash 文档: <https://lodash.com/docs/4.15.0>

uikit 文档: <http://getuikit.com/index.html>

v2ex api: <https://gist.github.com/fanzeyi/6951803>, <https://www.v2ex.com/p/7v9TEc53>

## 引荐 React.js 项目

项目 Demo 请访问: <http://ruby-china.liuzhen.me/>

项目代码: <https://github.com/liuzhenangel/react-ruby-china>

## 引荐个人博客项目

项目 Demo 请访问: <http://liuzhen.me/>

项目代码: <https://github.com/liuzhenangel/RBlog>

## 贡献者

* Rina

## Roadmap

- [ ] 登录与注册( 由于 v2ex api 未实现完全, 暂无法实现功能 )

- [ ] Tag 过滤支持( 由于 v2ex api 未实现完全, 暂无法实现功能 )

- [ ] 用户详情页( 由于 v2ex api 未实现完全, 暂无法实现功能 )

## LICENSE

MIT
