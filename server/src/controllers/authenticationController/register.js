const { database } = require("../../../database");

exports.register = function register(req, res) {
  const { username } = req.body;
  foundUser = database.users.find(
    (currentUser) => currentUser.username === username
  );
  if (!foundUser) {
    database.users.push(req.body);
    res.status(201).send("Added user");
  } else {
    res.status(209).send("already exist");
  }
};
