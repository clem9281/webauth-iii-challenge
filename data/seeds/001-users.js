const bcrypt = require("bcryptjs");

// trying a couple seeds for fun
exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      username: "frodo",
      password: bcrypt.hashSync("pass", 8),
      department: "fellowship"
    },
    {
      username: "pippin",
      password: bcrypt.hashSync("pass", 8),
      department: "ent duty"
    },
    {
      username: "merry",
      password: bcrypt.hashSync("pass", 8),
      department: "ent duty"
    },
    {
      username: "sam",
      password: bcrypt.hashSync("pass", 8),
      department: "fellowship"
    }
  ]);
};
