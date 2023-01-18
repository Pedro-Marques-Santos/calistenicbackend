import "reflect-metadata";
import "./shared/index";
import express from "express";
import { router } from "./routes";

import "./database/index";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log("Server is running!");
});
