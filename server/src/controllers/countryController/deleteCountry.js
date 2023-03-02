const { database } = require("../../../database");

exports.deleteCountry = function deleteCountry(req, res) {
  const { country } = req.params;

  const itemIndex = database.countries.findIndex(
    (item) => item.country === country
  );
  if (itemIndex >= 0) {
    database.countries.splice(itemIndex, 1);
    res.status(200).send("Country deleted");
  } else {
    res.status(404).send("Country not found");
  }
};
