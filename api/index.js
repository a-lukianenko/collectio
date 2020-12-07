const express = require("express");
const app = express();

const env = require("dotenv").config();
if (env.error) throw result.error;

const { PORT, HOST } = env.parsed;

app.get("/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal error. Please, try again later.");
});

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
