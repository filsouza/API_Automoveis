const Logger = {
  info: (...args: any[]) => console.log("%cinfo:", "color: green;", ...args),
  warn: (...args: any[]) => console.warn("%cwarn:", "color: yellow;", ...args),
  error: (...args: any[]) => console.error("%cerro:", "color: red;", ...args),
};

export default Logger;
