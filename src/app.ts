import "dotenv/config";
import express from "express";
import chalk from "chalk";

const app = express();
const port = process.env.PORT ?? 4000;

app.listen(+port, () => {
  console.log(chalk.green(`Listening on http://localhost:${port}`));
});

export default app;
