const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

// can check it from postman
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "hi" });
  }
  res.status(200).json({ success: true, msg: "hello" });
});

//get method
app.get("/get-page", (req, res) => {
  res.send("Welcome Page!!");
});

//put method
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.status(200).send("hello world");
});

app.listen(5000, () => {
  console.log("Server is listening...");
});
