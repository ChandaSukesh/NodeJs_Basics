const { createReadStream } = require("fs");

const stream = createReadStream("./content/first.txt", "utf-8");

stream.on("data", (result) => {
  console.log(result);
});

// stream.pipe()
// pipe is used to pushing from the read stream to write stream
