import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
const env: any = dotenv.config().parsed;

app.get("/articles", async (req: Request, resp: Response) => {
  console.log("/articles");
  resp.send();
});

app.listen(env.PORT, () => {
  console.log("[INFO] - Server listening on " + env.PORT);
});
