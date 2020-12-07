const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.get("/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
