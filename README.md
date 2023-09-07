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
+ isMobile - 是否是移动端
+ isSpider - 是否是爬虫

```js
import { isAndroid, isIOS, isSpider } from 'app-ua-cn'

isAndroid() // true or false 判断是否是安卓
```


### App判断

+ whatApp - 判断是什么App
+ whatAppName - 判断App的名称

```js
import { whatApp, whatAppName } from 'app-ua-cn'

whatApp() // 返回值: wechat | qq | weibo | alipay | dingtalk | taobao | uc | meitu | jd | dtdreamweb | wxwork

whatAppName() // 返回值：微信 | QQ | 微博 | 支付宝 | 钉钉 | 淘宝 | UC | 美图 | 京东 | 浙里办（阿里巴巴体系的很多都是这个） | 企业微信
```

