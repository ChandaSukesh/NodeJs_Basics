const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

// will not work just written for reference, not work becoz this is post so need to build form
app.post("/login", (req, res) => {
  console.log(req.body);
});

app.get("/get-page", (req, res) => {
  res.send("Welcome Page!!");
});

app.listen(5000, () => {
  console.log("Server is listening...");
});
