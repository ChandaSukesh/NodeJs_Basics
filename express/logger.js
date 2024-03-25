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

module.exports = logger;
