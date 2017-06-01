# health-app

> A mobile terminal app powered by Vue and wechat

## Problems in Devolopment
1. Swiper 组件所需 list 属性的参数的URL，即轮播图URL，使用外网地址访问图片的时候，
把图片目录放在 static 利用 express 内置静态文件系统。访问图片的地址即
'http://localhost:port/static/imgs/picName'。

2. 遇到 '$t is not defined' error,需要对 webpackConfig进行扩展
```javascript
const webpackConfig = {} // 原来的webpack配置

const vuxLoader = require('vux-loader')

module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [{
    name: 'vux-ui'
  }]
})
```
> 更新配置后需要重启npm run dev命令

- Options

  env 非必选，定义当前环境变量，只在vux-loader里使用，
  用来判断哪些插件需要被执行(如果plugin有定义envs的话)，目的是实现一份配置多个环境使用。
- Plugins
  
  插件为一个数组列表，根据需要可以添加你需要的插件，插件名为必须，有些组件不需要额外配置选项。
  
  公用参数为:
  
  - name 必须，插件名字
  - envs 非必须，数组，当前插件在哪些环境变量里执行，不定义则默认执行

[参考链接](https://vux.li/#/zh-CN/vux-loader)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
