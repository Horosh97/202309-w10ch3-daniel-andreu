import morgan from "morgan";
import app from "./app.js";
import express from "express";
import pingRouter from "../features/ping/router/pingRouter.js";
import motosRouter from "../features/motos/router/motosRouter.js";

app.use(morgan("dev"));

app.use(express.json());

app.use("/motos", motosRouter);

app.use("/", pingRouter);
