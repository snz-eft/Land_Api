const { database } = require("../../../database");

exports.patchCountry = function patchCountry(req, res) {
  const { country } = req.params;
  const itemIndex = database.countries.findIndex(
    (item) => item.country === country
  );
  if (itemIndex === -1) {
    res.status(404).send("could not find country");
    return;
  } else {
    database.countries[itemIndex] = Object.assign(
      database.countries[itemIndex],
      req.body
    );
    res.status(200).send("Update information");
  }
};
