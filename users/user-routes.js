const express = require("express");
const router = express.Router();
const db = require("../users/user-model");

router.route("/").get(async (req, res) => {
  console.log(req.decodedJwt.department);
  try {
    const users = await db.findBy({ department: req.decodedJwt.department });
    const usersWithoutPasswords = users.map(user => ({
      username: user.username,
      department: user.department
    }));
    res.status(200).json(usersWithoutPasswords);
  } catch (error) {
    res.status(500).json({ message: "We could not get the users right now" });
  }
});

module.exports = router;
