const express = require("express");
const app = express();
const path = require("path");

console.log("suk1", __dirname);

// setting up static and middlewares
app.use(express.static(`${__dirname}/express/public`));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(`${__dirname}/express`, "./navbar-app/index.html"));
// });

app.get("*", (req, res) => {
  res.send("resolve your path");
});

app.listen(5000, () => {
  console.log("server is listening...1");
});
