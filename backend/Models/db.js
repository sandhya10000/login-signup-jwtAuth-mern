const mongoose = require("mongoose");

const mongo_uri = process.env.MONGO_URI;
console.log(mongo_uri);

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log(err, "error--");
  });
