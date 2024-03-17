const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("This is our about page");
  } else {
    res.end(`<h1>Oops</h1>
    <a href='/'>Go Back! </a>`);
  }
});

server.listen(5000);
