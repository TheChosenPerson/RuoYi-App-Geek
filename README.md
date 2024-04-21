# RuoYi-App-Geek
# 引言
RuoYi-Vue与RuoYi-App是基于SpringBoot2+Vue2打造的企业级开发框架，得到了广大开发者的喜爱和积极反馈。随着技术的迭代进步，SpringBoot3与Vue3逐渐进入开发者的视野。为了满足开发者对于新技术的追求，RuoYi官方文档提供了SpringBoot2至SpringBoot3的升级方法。与此同时，社区也涌现出了RuoYi-Vue3、RuoYi-App-Vue3的版本，展现了开发者社区对于技术升级的热情与努力。

然而，在升级的过程中，官方的方法为了兼顾Java1.8的特性与一些老旧的方法，未完全拥抱**SpringBoot3与Java17**的全部特性。而社区的RuoYi-Vue3、RuoYi-App-Vue3版本由于出自不同的团队之手，**兼容性及整合性**上存在些许**不足**。更为关键的是，尽管这些版本**支持TypeScript**，但**缺乏与之相匹配的tsconfig.json配置文件**，这使得在主流编辑器如VSCode中，TypeScript的语法提示环境并未达到最佳状态。

鉴于此，**RuoYi-Geek生态**应运而生。它旨在为广大开发者提供一个既保留原版本核心特性，又整合社区版优点的全新解决方案。在**RuoYi-Geek**中，我们深入调研了企业开发中常用的RuoYi扩展，并直接在框架中集成，确保开发者能够快速上手，高效开发。同时，我们采用了最新的**SpringBoot3+Vue3**技术栈，彻底移除了为了兼容Java1.8而保留的老旧方法。更为重要的是，我们为TypeScript开发环境加入了常用的tsconfig.json配置，使得开发者在VSCode等编辑器中能够获得更为舒适、便捷的语法提示体验。

**RuoYi-Geek**不仅仅是一个简单的升级版本，更是对于RuoYi生态的一次全面优化与整合。我们相信，通过**RuoYi-Geek生态**，开发者将能够更为高效、愉悦地开发出优秀的企业级应用。

本项目为**RuoYi-Geek生态**的 RuoYi-App部分。
**注意：**
本人的其他两个推荐搭配的项目
1. [Ruoyi-SpringBoot3-Geek: 这是若依极客生态的后端Springboot3版本 (gitee.com)](https://gitee.com/geek-xd/ruoyi-spring-boot3-geek)
2. [RuoYi-Vue3-Geek: 这是若依极客生态的Vue3版本 (gitee.com)](https://gitee.com/geek-xd/ruo-yi-vue3-geek)

**与Ruoyi-App相比较**
1. 使用UniApp+Vue3的最新框架
2. 支持TS、SCSS、LESS等对js和css的扩充语言
3. 使用Pinia代替Vuex，更加轻巧简单
4. 使用uView-Plus（好看的ui） 代替uView-ui的ui组件库
5. 使用uCharts（方便的图表）画图工具
6. 已经完成了分包操作
7. 提供了颜色选择器、二维码等常用组件
8. 将原有内置工具进行类型标定
9. 分别提供了uview-plus和ucharts的模板（可以直接使用或者用于学习）
# 快速开始
**注意：**node版本需要16+

## 安装

一下三种方式均可，感觉速度 pnpm > yarn > cnpm > npm

***Vue3/Vite版要求 node 版本^14.18.0 || >=16.0.0***

```shell
npm install
cnpm install
yarn
pnpm install
```

# 启动

1. 将项目下载到本地
2. 初始化项目---进入项目根路径运行指令初始化项目
```npm install```
4. 运行项目---进入项目根路径运行指令（在package.json能找到所有指令）：
以微信小程序为例：```npm run dev:mp-weixin```
以H5为例``` npm run dev:h5```
7. 查看项目	  以微信小程序为例：
打开微信开发者工具，导入项目路径 dist\dev\mp-weixin
以H5为例：打开浏览器，输入控制台输出的地址
注：公众号属于H5，以微信公众号为例，打开微信开发者工具，输入控制台输出的地址
9. 打包项目---进入项目根路径运行指令（在package.json能找到所有指令）：
以微信小程序为例：```npm run build:mp-weixin```
以H5为例： ```npm run build:h5```


### 代码压缩

默认是启动代码压缩的，

如果需要关闭代码压缩，可以将vite.config.js中的build.minify赋值为false。

如果需要打开代码压缩，可以将vite.config.js中的build.minify赋值为true。

# 内置组件(geek-xd)

1. 颜色选择器组件
2. 二维码组件
3. 圆形菜单组件
4. 常用的订单组件
5. 信息展示组件

# 插件的使用

#### tab - 页面插件

可以通过设置参数中的config.data来实现页面传参

| 方法         | 作用                                             | 参数        |
| ------------ | ------------------------------------------------ | ----------- |
| getData      | 可以拿到上个页面通过tab传递的参数                | 无          |
| reLaunch     | 关闭所有页面，打开到应用内的某个页面             | url、config |
| switchTab    | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 | url、config |
| redirectTo   | 关闭当前页面，跳转到应用内的某个页面             | url、config |
| navigateTo   | 保留当前页面，跳转到应用内的某个页面             | url、config |
| navigateBack | 关闭当前页面，返回上一页面或多级页面             | config      |

#### auth - 鉴权插件

下面所有方法返回值都是布尔值，permission代表权限字符串，role代表角色字符串，复数形式代表数组。

| 方法        | 作用                                       | 参数        |
| ----------- | ------------------------------------------ | ----------- |
| hasPermi    | 验证用户是否具备某权限                     | permission  |
| hasPermiOr  | 验证用户是否含有指定权限，只需包含其中一个 | permissions |
| hasPermiAnd | 验证用户是否含有指定权限，必须全部拥有     | permissions |
| hasRole     | 验证用户是否具备某角色                     | role        |
| hasRoleOr   | 验证用户是否含有指定角色，只需包含其中一个 | roles       |
| hasRoleAnd  | roles                                      | roles       |

#### modal - 弹窗插件

content是消息内容，option是详细配置。

| 方法         | 作用                           | 参数    |
| ------------ | ------------------------------ | ------- |
| msg          | 消息提示                       | content |
| msgError     | 错误消息                       | content |
| msgSuccess   | 成功消息                       | content |
| hideMsg      | 隐藏消息                       | 无      |
| alert        | 弹出提示                       | content |
| confirm      | 确认窗体                       | content |
| showToast    | 提示信息                       | option  |
| loading      | 打开遮罩层，需要手动关闭遮罩层 | content |
| closeLoading | 关闭遮罩层                     | 无      |

#### bus - 事件插件

eventName是事件名称，eventFun是事件处理函数，请尽量避免事件插件的使用，请在组件销毁是解绑素有该组件有关的事件，避免产生bug。

| 方法  | 作用         | 参数                |
| ----- | ------------ | ------------------- |
| $on   | 绑定一个事件 | eventName、eventFun |
| $off  | 解绑一个事件 | eventName           |
| $emit | 触发一个事件 | eventName、...args  |

#### socket

设置项enableUUID，是否启用基于uuid的消息处理机制，要求当发送的消息携带uuid字段时，返回的消息也要携带uuid字段。

设置项enableEvent，是否启用基于事件的消息处理机制，要求当希望被事件处理函数处理的消息需要携带event字段。

| 方法      | 作用                                                                                                              | 参数                                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| connect   | 连接websocke，当连接成功后触发回调函数                                                                            | 最简单的用法就是传入{url:"ws://demo"}                                                                                      |
| send      | 发送信息，当uuid不为空且不为false时，当收到携带相同uuid的消息时触发回调函数，只触发一次。否则由默认处理函数处理。 | msg消息内容，会被处理成json字符串uuid唯一标识符，可以手动传入，也可以设置为true当为true时会自动生成一个uuid并添加到msg中。 |
| close     | 关闭连接，会触发回调函数的内容，不会触发默认关闭事件的处理函数，也不会修改默认关闭事件的处理函数。                | 无                                                                                                                         |
| on        | 监听事件，当收到携带event的消息时会调用回调函数。                                                                 | event事件的名称                                                                                                            |
| off       | 取消监听事件                                                                                                      |                                                                                                                            |
| onMessage | 定义默认监听事件                                                                                                  | callback 默认监听事件的处理函数                                                                                            |
| onError   | 定义异常事件                                                                                                      | callback 默认异常事件的处理函数                                                                                            |
| onClose   | 定义关闭事件                                                                                                      | callback 默认关闭事件的处理函数                                                                                            |

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

// 也可以使用下面的方式
import { tab, auth, modal} from '@/plugins'
```

### 对于ucharts

建议即便暂时不使用图表也不要删除它，以后可能会用到。

# 压缩内存

(主包最低809kb左右)

### 删除geek组件

1. 删除pages_geek和components/geek-xd文件夹
2. 删除pages.json中subPackages的root值为“pages_geek/pages”的配置
3. 删除pages/template.config.js中geek组件

### 去除模板

（占用主包582kb左右）

1. 删除pages_template、pages_qiun两个文件夹
2. 删除pages.json中subPackages的root值为“pages_qiun/pages”、“pages_template/pages”的两个配置
3. 删除pages/template.config.js和pages/template.vue
4. 删除pages.json中subPackages的“tabBar”中的模板一项和“pages”中模板的一项
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

**联系我们：**

QQ交流群：744785891
