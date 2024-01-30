import { uaMap } from "./uamap";

const getUA = () => window.navigator.userAgent.toLowerCase();

const isAndroid = (): boolean => {
  const ua = getUA();
  return ua.indexOf("android") > -1 || ua.indexOf("adr") > -1;
};

const isIos = (): boolean => {
  const ua = getUA();
  return !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
};

const isSpider = (): boolean => {
  const ua = getUA();
  return ua.indexOf("spider") > -1;
};

const isMobile = (): boolean => {
  return isAndroid() || isIos();
};

// 判断是不是ipad
const isiPad = (): boolean => {
  const ua = getUA();
  return ua.indexOf("ipad") > -1;
};

// 判断是不是pc
const isPC = (): boolean => {
  return !isMobile() && !isiPad();
};

const whatApp = (): string => {
  const ua = getUA();
  let app = "";
  for (let i = 0; i < uaMap.length; i++) {
    let item = uaMap[i];
    // 如果item.ua是字符串
    if (ua.indexOf(item.ua) > -1) {
      app = item.ua;
      break;
    }
  }
  return app || "unknown";
};

const whatAppName = (): string => {
  const uaItem = whatApp();
  let appName = "";
  for (let i = 0; i < uaMap.length; i++) {
    let item = uaMap[i];
    // 如果item.ua是字符串
    if (uaItem === item.ua) {
      appName = item.cn;
      break;
    }
  }
  return appName || "未知应用";
};

export {
  isAndroid,
  isIos,
  isiPad,
  isMobile,
  isPC,
  isSpider,
  whatApp,
  whatAppName,
  whatAppName as getAppName,
};
