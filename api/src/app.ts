const env = require("dotenv").config();
if (env.error) throw env.error;
const { PORT, HOST } = env.parsed;

import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import logger from "morgan";

import postsRoute from "./routes/posts";

const app: express.Application = express();

app.use(logger("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/posts", postsRoute);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Internal error. Please, try again later.");
});

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
