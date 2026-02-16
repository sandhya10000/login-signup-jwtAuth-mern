const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.get("/ping", (req, res) => {
  res.send("WE DID IT");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
