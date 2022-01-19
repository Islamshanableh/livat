const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: { type: String },
  name_en: { type: String },
  name_ar: { type: String },
  updated_at: { type: Date, default: new Date() },
  created_at: { type: Date, default: new Date() },
});

module.exports = mongoose.model("categories", categoriesSchema);
