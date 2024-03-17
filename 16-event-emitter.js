const EventEmitter = require("events");

const customerEvent = new EventEmitter();

customerEvent.on("response", (name, age) => {
  console.log("event have been invoked");
  console.log(name, age);
});

customerEvent.emit("response", "john", 34);
