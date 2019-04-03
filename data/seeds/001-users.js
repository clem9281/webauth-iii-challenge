const bcrypt = require("bcryptjs");

// trying a couple seeds for fun
exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      username: "Frodo",
      password: bcrypt.hashSync("pass", 8),
      department: "fellowship"
    },
    {
      username: "Pippin",
      password: bcrypt.hashSync("pass", 8),
      department: "ent duty"
    }
  ]);
};
