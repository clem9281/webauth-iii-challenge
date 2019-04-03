const express = require("express");
const router = express.Router();
const db = require("../users/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("./secrets").jwtSecret;

const generateToken = (user, secret) => {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
};

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

router.route("/login").post(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Bad request" });
  else {
    try {
      const user = await db.findBy({ username }).first();
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user, secret);
        return res.status(200).json({ message: "Logged in", token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "We could not log you in at this time" });
    }
  }
});

module.exports = router;
