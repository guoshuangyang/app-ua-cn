# app-ua-cn

## 项目介绍

常见的国内的手机应用的浏览器的UA判断 `陆续更新中...`

## 使用方法

```bash
npm install app-ua-cn
```

## 方法

### is系列

+ isAndroid - 是否是安卓
+ isIOS - 是否是IOS
+ isiPad - 是否是ipad
+ isMobile - 是否是移动端
+ isPC - 是否是PC端
+ isSpider - 是否是爬虫


```js
import { isAndroid } from 'app-ua-cn'

isAndroid() // true or false 判断是否是安卓
```

### App判断

+ whatApp - 判断是什么App
+ whatAppName - 判断App的名称

```js
import { whatApp, whatAppName } from 'app-ua-cn'

whatApp() // 返回值: wxwork | wechat | qq | weibo | alipay | dingtalk | taobao | uc | meitu | jd | dtdreamweb 

whatAppName() // 返回值：企业微信 | 微信 | QQ | 微博 | 支付宝 | 钉钉 | 淘宝 | UC | 美图 | 京东 | 浙里办（阿里巴巴体系的很多都是这个） 等
```


## ua的key（whatApp()获取到的）和name（whatAppName()获取到的）对照表

| key | name | 备注 |
| --- | --- | --- |
| wxwork | 企业微信 | 企业微信 |
| wechat | 微信 | 微信 |
| qq | QQ | QQ |
| weibo | 微博 | 微博 |
| alipay | 支付宝 | 支付宝 |
| dingtalk | 钉钉 | 钉钉 |
| taobao | 淘宝 | 淘宝 |
| uc | UC | UC |
| meitu | 美图 | 美图 |
| jd | 京东 | 京东 |
| dtdreamweb | 浙里办 | 阿里巴巴体系的很多都是这个 |
| taurusapp | 专有钉钉 | 专有钉钉如：浙政钉、浙里办等 |
