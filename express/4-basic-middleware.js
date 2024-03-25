const app = require("express")();

// middleware function, here parameters express only sends for us.Just we need to pass them as parameters.
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log("suk1", method, url);
  // compulsory we need to send either to next middleware to terminate here.
  // res.send("Testing");
  // or
  // it passes to next middleware
  next();
};

app.get("/", logger, (req, res) => {
  res.send("My Home page");
});

app.get("/about", (req, res) => {
  res.send("My About page");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
