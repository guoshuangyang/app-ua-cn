const uaMap: Array<{
  ua: string;
  cn: string;
}> = [
  {
    ua: "wxwork",
    cn: "企业微信",
  },
  // 企业微信和微信的ua都包含微信的ua一样，所以要放在微信前面
  {
    ua: "micromessenger",
    cn: "微信",
  },
  {
    ua: "qq",
    cn: "QQ",
  },
  {
    ua: "weibo",
    cn: "微博",
  },
  {
    ua: "alipayclient",
    cn: "支付宝",
  },
  {
    ua: "dingtalk",
    cn: "钉钉",
  },
  {
    ua: "taobao",
    cn: "淘宝",
  },
  {
    ua: "ucbrowser",
    cn: "UC浏览器",
  },
  {
    ua: "baidubrowser",
    cn: "百度浏览器",
  },
  {
    ua: "imeituan",
    cn: "美团",
  },
  {
    ua: "jd",
    cn: "京东",
  },
  {
    ua: "dtdreamweb",
    cn: "浙里办",
  },
];

export { uaMap };
