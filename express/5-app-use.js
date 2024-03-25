const app = require("express")();

const logger = require("./logger");

app.use(logger);

// the above middleware is applicable for all below routes.

//app.use('/api',logger);
// the above middleware is applicable for all routes which starts with /api ...

// to use multiple middlewares, use below code..
//  syntax: app.use([middleware1,middleware2])
// ex: app.use([logger,authorize])

app.get("/", (req, res) => {
  res.send("My Home page");
});

app.get("/about", (req, res) => {
  res.send("My About page");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
