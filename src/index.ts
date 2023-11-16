import chalk from "chalk";
import { startServer } from "./server/app";
import connectToDatabase from "./database";
// eslint-disable-next-line no-unused-vars
import app from "./server/app";

const port = process.env.PORT ?? 4000;
if (!process.env.MONGODB_URL) {
  console.log(chalk.red("Missing MongoDB Connection String"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);
startServer(+port);
