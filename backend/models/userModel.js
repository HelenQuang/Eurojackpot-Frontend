import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const lotterySchema = new mongoose.Schema({
  mainNumbers: [Number],
  starNumbers: [Number],
});

const gameSchema = new mongoose.Schema({
  play: [lotterySchema],
  result: lotterySchema,
  win: Number,
  cost: Number,
});

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true, min: 10 },
  paidAt: Date,
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    bankAccount: {
      type: Number,
      default: 100,
      min: 0,
    },
    avatar: String,
    gameHistory: [gameSchema],
    transaction: [transactionSchema],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Encrypt the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
