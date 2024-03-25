const app = require("express")();

const logger = require("./logger");

app.get("/", logger, (req, res) => {
  res.send("My Home page");
});

app.get("/about", (req, res) => {
  res.send("My About page");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
