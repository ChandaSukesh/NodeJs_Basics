const app = require("express")();

app.get("/", (req, res) => {
  res.send('<a href="/newClick/product" >Click Me !! </a>');
});

app.get("/newClick/product", (req, res) => {
  res.send("Second Page!!!");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
