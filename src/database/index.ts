import mongoose from "mongoose";
import chalk from "chalk";

const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    console.log(chalk.green("connected to database"));
  } catch {
    console.log(chalk.red("Failed connecting to database"));
  }
};

export default connectToDatabase;
