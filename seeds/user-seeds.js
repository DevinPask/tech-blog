const { User } = require('../models');

const userData = [
  {
    username: "tony_s",
    email: "tony_s@gmail.com",
    password: "p@ssword1"
  },
  {
    username: "bruce_b",
    email: "bruce_b@gmail.com",
    password: "p@ssword2"
  },
  {
    username: "bruce_w",
    email: "bruce_w@gmail.com",
    password: "p@ssword3"
  },
  {
    username: "kal_l",
    email: "kal_l@gmail.com",
    password: "p@ssword4"
  },
  {
    username: "logan",
    email: "logan@gmail.com",
    password: "p@ssword5"
  },
  {
    username: "peter_q",
    email: "peter_q@gmail.com",
    password: "p@ssword6"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;