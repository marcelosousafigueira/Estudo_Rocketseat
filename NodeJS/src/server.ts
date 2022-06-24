import express, { Request, Response } from "express";
import { createCouse } from "./routes";

const app = express();
app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello" });
});

app.get("/teste", createCouse);

app.listen(3333);
