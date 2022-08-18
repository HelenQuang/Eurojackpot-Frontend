import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";
import users from "./data/users.js";
import userRoutes from "./routes/userRoutes.js";
import lotteryRoutes from "./routes/lotteryRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

//User Routes:
app.use("/api/users", userRoutes);

//Lottery Routes:
app.use("/api/lottery", lotteryRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

//Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.brightYellow
      .bold
  )
);
