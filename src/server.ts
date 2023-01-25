import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./shared/index";
import express from "express";
import cors from "cors";
import { router } from "./routes";

import "./database/index";

import { AppError } from "./errors/AppErrors";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log("Server is running!");
});
