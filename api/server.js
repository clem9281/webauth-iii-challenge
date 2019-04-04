const express = require("express");
const helmet = require("helmet");
const auth = require("../auth/auth");
const users = require("../users/user-routes");
const restricted = require("../users/restrictedMiddleware");

const app = express();

app.use(helmet());
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/users", restricted, users);

app.get("/", (req, res) => res.send("<h1>WebAuth III</h1>"));

module.exports = app;
