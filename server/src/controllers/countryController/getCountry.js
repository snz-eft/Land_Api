const { database } = require("../../../database");

exports.getCountry = function getCountry(req, res) {
  res.status(200).json(database.countries);
};
