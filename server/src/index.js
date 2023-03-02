const dotenv = require("dotenv");
const express = require("express");
const server = express();
const cookieParser = require("cookie-parser");
const { database } = require("../database");
const { countryRoute } = require("./routes/countryRoute");
const { authenticationRoute } = require("./routes/authenticationRoute");
const { bodyValidation } = require("./middlewares/bodyValidation");

dotenv.config();

server.use(express.json());
server.use(cookieParser());
server.use("/authentication", authenticationRoute);
server.use("/country", countryRoute);

server.listen(5050, () => {
  console.log("Server is listening on 5050");
});
