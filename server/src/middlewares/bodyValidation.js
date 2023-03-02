const joi = require("joi");

exports.bodyValidation = function bodyValidation(req, res, next) {
  const schema = joi.object({
    country: joi.string().min(4).max(50).required(),
    capital: joi.string().min(4).max(50).required(),
    population: joi.string().min(1).max(999999999).required(),
    language: joi.string().min(5).max(25).required(),
  });
  const validation = schema.validate(req.body);
  if (validation.error) {
    return res.status(400).json(validation.error.details[0].message);
  }
  next();
};
