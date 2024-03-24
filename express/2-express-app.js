const app = require("express")();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.get("*", (req, res) => {
  res.send("resolve your path");
});

app.listen(5000, () => {
  console.log("server is listening");
});
