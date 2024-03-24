const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.send("<h3>Resource not found</h3>");
});

app.listen(5000, () => {
  console.log("Server is listening...");
});
