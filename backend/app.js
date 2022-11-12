import express from "express";

import users from "./data/users.js";
import userRoutes from "./routes/userRoutes.js";
import lotteryRoutes from "./routes/lotteryRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

//To accept raw JSON passing in the body of request
app.use(express.json());

//Routes:
app.use("/api/users", userRoutes);
app.use("/api/lottery", lotteryRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

//Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
