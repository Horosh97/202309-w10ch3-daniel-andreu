import "dotenv/config";
import express from "express";
import chalk from "chalk";

const app = express();

export const startServer = (port: number) => {
  app.listen(() => {
    console.log(chalk.green(`Listening on http://localhost:${port}`));
  });
};

export default app;
