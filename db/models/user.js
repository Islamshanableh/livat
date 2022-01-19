const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String },
  balance: { type: Number, default: 0 },
  email: { type: String, required: true, unique: true },
  type: { type: String, default: null },
  phone: { type: Number },
  allow_upload_video: { type: Boolean, default: false },
  follower_count: { type: Number, default: null },
  phone_backup: { type: Number, default: null },
  language: { type: String, default: null },
  country_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "countries",
    default: null,
  },
  password: { type: String },
  remember_token: { type: String, default: null },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: null },
  token: { type: String, default: null },
  code: { type: Number, default: null },
  fcm_token: { type: String, default: null },
  email_verified_at: { type: Date, default: null },
  gender: { type: String, default: null },
  image_path: { type: String, default: null },
  code_verified_at: { type: Date, default: null },
  os: { type: String, default: null },
  profile_pic: { type: String, default: null },
  can_go_live: { type: Boolean, default: false },
  account_is_confirmed: { type: Boolean, default: false },
});

// this function to hashing password before save in database
usersSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("users", usersSchema);
