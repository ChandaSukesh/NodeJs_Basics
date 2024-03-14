const os = require("os");

// info about current user
console.log(os.userInfo());

// method that returns the system uptime in seconds
// uptime is the metric that measures system reliability and stability.
// if a system uptime is high, then it indicates that the system is more reliable and stable.
console.log(os.uptime());

const currentObj = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentObj);
