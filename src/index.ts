// 根据window的ua判断是否是移动端以及是什么app内部
export * from "./is";

// if in browser
if (typeof window !== "undefined") {
  // @ts-ignore
  window.whatUa = is;
}
