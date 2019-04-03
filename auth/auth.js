const express = require("express");
const router = express.Router();
const db = require("../users/user-model");
const bcrypt = require("bcryptjs");

router.route("/register").post(async (req, res) => {
  const { username, password, department } = req.body;
  if (!username || !password || !department)
    return res.status(400).json({ message: "Bad request" });
  else {
    const hash = bcrypt.hashSync(password, 8);
    req.body.password = hash;
    try {
      const newUserId = await db.addUser(req.body);
      const newUser = await db.findBy({ id: newUserId[0] }).first();
      const newUserNoPassword = {
        username: newUser.username,
        department: newUser.department
      };
      res.status(201).json(newUserNoPassword);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Sorry, we could not register you at this time" });
    }
  }
});

module.exports = router;
