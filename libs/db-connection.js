const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://zahersh:123abc@ds123844.mlab.com:23844/chat-app",
  { useMongoClient: true }
);

mongoose.connection
  .once("open", () => console.log("Connected to the database"))
  .on("error", err => console.error(err));
