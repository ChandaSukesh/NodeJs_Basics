const app = require("express")();

const logger = require("./logger");

app.use(logger);

// the above middleware is applicable for all below routes.

//app.use('/api',logger);
// the above middleware is applicable for all routes which starts with /api ...

app.get("/", (req, res) => {
  res.send("My Home page");
});

app.get("/about", (req, res) => {
  res.send("My About page");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
