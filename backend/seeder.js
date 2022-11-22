import fs from "fs";
import dotenv from "dotenv";
import colors from "colors";
// import users from "./data/users.json";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

//Read JSON file
const users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));

//Import data into database
const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });

    console.log("Data Imported!".bgGreen);
  } catch (error) {
    console.error(`${error}`.bgRed);
  }
  process.exit(1);
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("Data Destroyed!".bgMagenta);
    process.exit();
  } catch (error) {
    console.error(`${error}`.bgRed);
  }
  process.exit(1);
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
