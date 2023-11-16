import express from "express";
import chalk from "chalk";

const app = express();

export const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(chalk.green(`Listening on http://localhost:${port}`));
  });
};

export default app;
