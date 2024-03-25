const app = require("express")();

app.get("/", (req, res) => {
  res.send('<a href="/newClick/product" >Click Me !! </a>');
});

app.get("/newClick/product", (req, res) => {
  res.send("Second Page!!!");
});

// route params: They are like placeholder where user provides data
app.get("/newClick/product/:id/reviews/:productId", (req, res) => {
  console.log("suk1", req.params);
  res.send("Second Page!!!");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
