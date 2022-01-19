const express = require("express");
const { getAllCountries, } = require("../controllers/categories");

const countriesRouter = express.Router();


countriesRouter.get("/get-countries", getAllCountries);

module.exports = categoriesRouter;