const EventEmitter = require("events");

const customerEvent = new EventEmitter();

customerEvent.on("response", () => {
  console.log("event have been invoked");
});

customerEvent.emit("response");
