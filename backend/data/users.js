import bcrypt from "bcrypt";

export const users = [
  {
    name: "admin",
    email: "admin@123.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "sarfraz",
    email: "sarfraz@123.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "ranjan",
    email: "ranjan@123.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
