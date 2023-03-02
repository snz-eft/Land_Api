const { database } = require("../../../database");

exports.postCountry = function postCountry(req, res) {
  const { username } = req.loggedInUser;
  database.countries.push(req.body);
  res.status(201).send("Added country");
};
