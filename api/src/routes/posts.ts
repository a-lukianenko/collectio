import { db } from "../db/db.config";
import { Router, Request, Response, NextFunction } from "express";

const posts = Router();

interface Post {
  id: number;
  title: string;
  text: string;
}

posts.get("/", (req: Request, res: Response) => {
  db.select("*")
    .from("posts")
    .then((rows: Post[]) => {
      return rows.length === 0 ? res.send("No posts!") : res.json(rows);
    });
});

posts.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  db.select("*")
    .from("posts")
    .where("id", id)
    .then((rows: Post[]) => {
      return rows.length === 0 ? next(new Error("404")) : res.json(rows);
    });
});

posts.post("/", (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, text } = req.body;

  db("posts")
    .returning("id")
    .insert({ title, text })
    .then((inserted: number[]) => {
      res
        .status(201)
        .send(`Post ID:${inserted[0]} "${title}" successfully created`);
    });
});

posts.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { title, text } = req.body;

  db("posts")
    .where("id", id)
    .update({ title, text })
    .then((updatedPosts: number) => {
      return updatedPosts === 0
        ? next(new Error("404"))
        : res.json({ updatedPosts });
    });
});

posts.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  db("posts")
    .where("id", id)
    .del()
    .then((deletedPosts: number) => {
      return deletedPosts === 0
        ? next(new Error("404"))
        : res.json({ deletedPosts });
    });
});

posts.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  err.message.startsWith("404") && res.status(404).json({ 404: "Not Found" });
});

export default posts;
