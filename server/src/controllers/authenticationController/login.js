const { database } = require("../../../database");
const jwt = require("jsonwebtoken");

exports.login = function login(req, res) {
  const secret = process.env.SECRET;
  const { username, password } = req.body;
  const foundUser = database.users.find(
    (currentUser) =>
      currentUser.password === password && currentUser.username === username
  );
  // console.log("foundUser", foundUser);
  // console.log("secret", secret);
  if (foundUser) {
    const copyOfUser = { ...foundUser };
    delete copyOfUser.password;
    const authToken = jwt.sign(copyOfUser, secret, { expiresIn: 120 });
    res.cookie("authToken", authToken, {
      maxAge: 360000,
      sameSite: "none",
      httpOnly: true,
    });
    res.status(200).send("Good Login");
    return;
  }
  res.status(401).send("Invalid username/password");
};
