const { readFile } = require("fs");
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const start = async () => {
  try {
    const first = await getText("./content/first.js");
    const second = await getText("./content/second.js");
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();
