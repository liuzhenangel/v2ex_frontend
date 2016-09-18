# v2ex-frontend

> A Vue.js project

## 项目介绍
 V2EX Frontend 项目是一个前后端完全分离的项目, 前端用到的框架有 vue.js, uikit. 后端调用的V2EX的API接口.

## 技术框架
 ### vue.js
 ### uikit
 ### v2ex api

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at 127.0.0.1:8000
npm run dev ( 因为涉及到api反向代理, 所以本地运行时需要访问127.0.0.1:8000, 不能访问localhost:8000 )

# build for production with minification
npm run build (执行完这条命令会在./dist目录下生成编译后的文件, 将./dist下的文件复制到服务器, 配置好nginx, 就能正常访问了)
```

## Demo

[v2ex.liuzhen.me](http://v2ex.liuzhen.me)


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
