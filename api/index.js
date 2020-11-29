const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.listen(PORT, "localhost", () => {
  console.log(`Listening on port ${PORT}`);
});
