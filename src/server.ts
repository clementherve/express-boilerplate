import express, { Request, Response } from "express";
import dotenv from "dotenv";
import assert from "assert";

const app = express();
const env: any = dotenv.config().parsed;
assert(env != undefined);

app.get("/articles", async (req: Request, resp: Response) => {
  resp.send();
});

app.listen(env.PORT, () => {
  console.log("[INFO] - Server listening on " + env.PORT);
});
