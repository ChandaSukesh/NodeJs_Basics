const app = require("express")();

const logger = require("./logger");

// if we have multiple middlewares then [middleware1,middleware2]
app.get("/", logger, (req, res) => {
  res.send("My Home page");
});

app.get("/about", (req, res) => {
  res.send("My About page");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
