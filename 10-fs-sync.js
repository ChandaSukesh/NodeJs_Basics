const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);

writeFileSync("./content/result-async.txt", `The result is:${first},${second}`);

// the below one is used for appending the resultant.
// writeFileSync("./content/result.txt", `The result is:${first},${second}`, {
//   flag: "a",
// });
