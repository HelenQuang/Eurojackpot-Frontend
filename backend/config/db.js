import mongoose from "mongoose";

const connectDB = () => {
  const DB = process.env.MONGODB_URI.replace(
    "<PASSWORD>",
    process.env.MONGODB_PASSWORD
  );

  mongoose.connect(DB).then(() => {
    console.log("DB connection successful");
  });
};

export default connectDB;
