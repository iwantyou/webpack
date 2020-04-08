export const get = (obj, attributeChain, defaultValue = "") => {
  if (!obj || typeof obj != "object") return defaultValue;
  if (!attributeChain) return obj;
  let returnValue = obj;
  let isdefault = true;
  const attribute = attributeChain.replace(/\[/g,'.').replace(/\]/, '').split(".");
  for (let key of attribute) {
    if (typeof returnValue[key] == "undefined") {
      isdefault = false;
      break;
    }
    returnValue = returnValue[key];
  }
  return isdefault ? returnValue : defaultValue;
};


Function.prototype.Mcall = () => {
    let _this = arguments[0]
    var fn = _this
    let a = Symbol()
    fn[a] = this
    fn[a](...[...arguments].slice(1))
    delete fn[a]
}
