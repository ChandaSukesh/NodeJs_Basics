const { readFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
// same for writeFile as well

// another approach is...
// just add promises at the end
// const { readFile } = require("fs").promises;
// these two lines are not needed
// const util = require("util");
// const readFilePromise = util.promisify(readFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf-8");
    const second = await readFilePromise("./content/second.txt", "utf-8");
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();
