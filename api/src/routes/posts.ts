import { Router, Request, Response } from "express";

const posts = Router();

posts.get("/", (req: Request, res: Response) => {
  res.json({ all: "posts" });
});

posts.get("/:id", (req: Request, res: Response) => {
  res.json({ post: req.params.id });
});

posts.post("/", (req: Request, res: Response) => {
  res.json({ newPost: req.body.newPost });
});

posts.put("/:id", (req: Request, res: Response) => {
  res.json({ updatedPost: req.body.updatedPost });
});

posts.delete("/:id", (req: Request, res: Response) => {
  res.json({ deletePost: req.params.id });
});

export default posts;
