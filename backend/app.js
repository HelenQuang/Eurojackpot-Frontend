import express from "express";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import cookieParser from "cookie-parser";

import AppError from "./utils/appError.js";
import globalErrHandler from "./controllers/errorController";
// import users from "./data/users.js";
import userRoutes from "./routes/userRoutes.js";
import lotteryRoutes from "./routes/lotteryRoutes.js";

const app = express();

////////////////////////////////
//To set security headers
app.use(helmet());

//To log development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//To limit the requests coming from 1 IP => block these requests
const limiter = rateLimit({
  max: 100, //number of max requests
  windowMs: 60 * 60 * 1000, //Milisecond time window (1hour)
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

//To accept raw JSON passing in the body of request
app.use(express.json({ limit: "10kb" }));

//To read data from browser cookie
app.use(cookieParser());

//To sanitize data against NoSQL query injection
app.use(mongoSanitize());

//To sanitize data against XSS attacks
app.use(xss());

/////////////////////////////
//Routes:
app.use("/api/users", userRoutes);
app.use("/api/lottery", lotteryRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

/////////////////////////////
//Handle error:
app.all("*", (req, res, next) => {
  next(new AppError(404, `${req.originalUrl} cannot find in this server`));
});

app.use(globalErrHandler);

// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

module.exports = app;
