# RuoYi-App-Vue3-uView-plus-uCharts

# 介绍

* 本框架基于RuoYi-App框架二次修改，使用Uniapp+Vue3。
* 同时支持js或者ts。
* 同时支持css、scss、less
* 已经做了初步分包
* 已经引入uview-plus（好看的ui）
* 已经引入ucharts（方便的图表）
* 分别提供了uview-plus和ucharts的模板（可以直接使用或者用于学习）

# 安装

一下三种方式均可，感觉速度 pnpm > yarn > cnpm > npm

***Vue3/Vite版要求 node 版本^14.18.0 || >=16.0.0***

```shell
npm install
cnpm install
yarn
pnpm install
```

# 启动

详见package.json的“scripts”，以下是案例：

```shell
:: 微信小程序编译运行
npm run dev:mp-weixin
```
成功后使用微信小程序打开：dist\dev\mp-weixin

### 代码压缩
默认是启动代码压缩的，

如果需要关闭代码压缩，可以将vite.config.js中的build.minify赋值为false。

如果需要打开代码压缩，可以将vite.config.js中的build.minify赋值为true。
# 作者建议

### 对于选项式

```js
this.$tab // 建议使用this.$tab进行页面跳转，理由：便于在跳转前处理其他事务
this.$auth // 建议使用this.$auth进行鉴权操作
this.$modal // 建议使用this.$modal打开弹窗，理由：便于以后想要使用自定义弹窗
```

### 对于组合式

```js
import tab from '@/plugins/tab' // 建议使用tab进行页面跳转，理由：便于在跳转前处理其他事务
import auth from '@/plugins/auth' // 建议使用auth进行鉴权操作
import modal from '@/plugins/modal' // 建议使用modal打开弹窗，理由：便于以后想要使用自定义弹窗
```

### 对于ucharts

建议即便暂时不使用图表也不要删除它，以后可能会用到。

# 压缩内存

(主包最低809kb左右)

### 去除模板

（占用主包582kb左右）

1. 删除pages_template、pages_qiun两个文件夹
2. 删除pages.json中subPackages的root值为“pages_qiun/pages”、“pages_template/pages”的两个配置
3. 删除pages/template.config.js和pages/template.vue
4. 删除pages.json中subPackages的“tabBar”中的模板一项
5. 删除static中的uview，里面都是示例图片。
6. 删除plugins中的config.js和common.js，并在plugins/index.js中删除相关配置

### 删除uchart

（占用主包175kb左右，不建议删除，以防以后会用）

1. 删除components/qiun-data-charts文件夹
2. 删除pages.json中的easycom下的custom中的"qiun-(.*)"的那一行
3. 删除pages/index中使用 “qiun-data-charts” 的部分

### 删除uview

（按需引入，没必要删除）

1. main.js或者main.ts中删除

```js
import uviewPlus from 'uview-plus'
// ......
app.use(uviewPlus)
```

2. uni.scss中删除 @import 'uview-plus/theme.scss';
3. App.vue中删除  @import '@/static/scss/index.scss';
4. package.json中删除    "clipboard": "^2.0.11","dayjs": "^1.11.9","uview-plus": "^3.1.36",


# 附录

[Vue3官网](https://cn.vuejs.org/)；
[uniapp官网](https://uniapp.dcloud.net.cn/)；
[uView-plus官网](https://uiadmin.net/uview-plus/)；
[uCharts官网](https://www.ucharts.cn/v2/#/)；
[RuoYi官网](http://ruoyi.vip/)；
