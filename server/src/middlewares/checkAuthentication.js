const jwt = require("jsonwebtoken");

exports.checkAuthentication = function checkAuthentication(req, res, next) {
  const secret = process.env.SECRET;
  const authToken = req.cookies.authToken;

  try {
    const loggedInUser = jwt.verify(authToken, secret);
    // console.log(loggedInUser);
    req.loggedInUser = loggedInUser;
  } catch (e) {
    res.statuse(403).send("Forbidden Access");
  }
  next();
};
