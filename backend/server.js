import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

process.on("uncaughtException", (err) => {
  console.log(err);
  // console.log("UNCAUGHT EXCEPTION! SHUTING DOWN...");
  process.exit(1);
});

dotenv.config();
connectDB();
const app = require("./app");

//Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${port}`.bgYellow.bold
  );
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! SHUTING DOWN...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
