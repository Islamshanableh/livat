const countriesSchema = require("../../db/models/countries");

const getAllCountries = (req, res) => {
  countriesSchema
    .find({})
    .then((categories) => {
      res.status(200).json({
        success: true,
        message: `All Countries`,
        countries: countries,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        // err: err,
      });
    });
};

module.exports = {
  getAllCountries,
};
