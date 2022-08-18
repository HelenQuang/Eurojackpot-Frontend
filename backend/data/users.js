import bcrypt from "bcryptjs";
// const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Helen Quang",
    email: "helen@example.com",
    password: bcrypt.hashSync("123456", 10),
    gameHistory: [
      {
        play: [
          { mainNumbers: [1, 2, 3, 4, 5], starNumbers: [6, 7] },
          { mainNumbers: [11, 12, 13, 14, 15], starNumbers: [6, 7] },
          { mainNumbers: [21, 22, 23, 24, 25], starNumbers: [6, 7] },
        ],
        result: { mainNumbers: [1, 2, 3, 17, 18], starNumbers: [2, 7] },
        win: 17,
        cost: 6,
      },
    ],
    transaction: [
      { amount: 10, paidAt: Date.now() },
      { amount: 20, paidAt: Date.now() },
    ],
  },
  {
    name: "Ha Quang",
    email: "ha@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
