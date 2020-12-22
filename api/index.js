const env = require("dotenv").config();
if (env.error) throw result.error;
const { PORT, HOST } = env.parsed;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const postsRoute = require("./routes/posts");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/posts", postsRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal error. Please, try again later.");
});

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
