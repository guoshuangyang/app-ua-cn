import { uaMap } from "./uamap";

const isAndroid = (): boolean => {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf("android") > -1 || ua.indexOf("adr") > -1;
};

const isIos = (): boolean => {
  const ua = window.navigator.userAgent.toLowerCase();
  return !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
};

const isSpider = (): boolean => {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf("spider") > -1;
};

const isMobile = (): boolean => {
  return isAndroid() || isIos();
};

const whatApp = (): string => {
  const ua = window.navigator.userAgent.toLowerCase();
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

const getAppName = (): string => {
  const uaItem = whatApp();
  let appName = "";
  for (let i = 0; i < uaMap.length; i++) {
    let item = uaMap[i];
    // 如果item.ua是字符串
    if (uaItem === item.ua) {
      appName = item.ua;
      break;
    }
  }
  return appName || "未知应用";
};

export { isAndroid, isIos, isMobile, whatApp, getAppName, isSpider };
