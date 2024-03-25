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

// query string:
app.get("/api/v1", (req, res) => {
  const { name } = req.query;
  console.log("suk3", name);
  console.log("suk2", req.query);
  res.send("Query String!!");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
