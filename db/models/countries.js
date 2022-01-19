const mongoose = require("mongoose");

const countriesSchema = new mongoose.Schema({}, { strict: false });


module.exports = mongoose.model("countries", countriesSchema);
