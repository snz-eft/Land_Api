const express = require("express");
const countryRoute = express.Router();
const { checkAuthentication } = require("../middlewares/checkAuthentication");
const { getCountry } = require("../controllers/countryController/getCountry");
const { postCountry } = require("../controllers/countryController/postCountry");
const {
  patchCountry,
} = require("../controllers/countryController/patchCountry");
const {
  deleteCountry,
} = require("../controllers/countryController/deleteCountry");
const { bodyValidation } = require("../middlewares/bodyValidation");
countryRoute.get("/", getCountry);

countryRoute.patch(
  "/:country",
  checkAuthentication,
  bodyValidation,
  patchCountry
);

countryRoute.post(
  "/register",
  checkAuthentication,
  bodyValidation,
  postCountry
);

countryRoute.delete("/:country", checkAuthentication, deleteCountry);

exports.countryRoute = countryRoute;
