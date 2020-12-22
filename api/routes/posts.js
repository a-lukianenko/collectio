const express = require("express");

const posts = express.Router();

posts.get("/", (req, res) => {
  res.json({ all: "posts" });
});

posts.get("/:id", (req, res) => {
  res.json({ post: req.params.id });
});

posts.post("/", (req, res) => {
  res.json({ newPost: req.body.newPost });
});

posts.put("/:id", (req, res) => {
  res.json({ updatedPost: req.body.updatedPost });
});

posts.delete("/:id", (req, res) => {
  res.json({ deletePost: req.params.id });
});

module.exports = posts;
