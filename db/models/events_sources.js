const mongoose = require("mongoose");

const events_sourcesSchema = new mongoose.Schema({}, { strict: false });


module.exports = mongoose.model("events_sources", events_sourcesSchema);