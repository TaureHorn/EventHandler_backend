const express = require("express");
const db = require("./DBConnection.js");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./router");
const cors = require("cors");

const login = require("./loginController");
const { User } = require("./models/userModel")

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`My app is listening on localhost:${port}`);
});

app.post("/auth", login.login);

app.use( async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // console.log("authheader is equal to " + authHeader)  
  const user = await User.find({token:authHeader})
  // console.log("user.token is equal to " + user[0].token)
  if (!user[0]) {
    res.sendStatus(403)
  }  
  if (user[0].token === authHeader) {
    next();
  } else {
    res.sendStatus(403);
  }
});

app.use(router);
