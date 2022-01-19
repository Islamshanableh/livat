const express = require("express");
const { updateProfile } = require("../controllers/user");
const { authentication } = require("../middlewares/authentication");

const userRouter = express.Router();

userRouter.put("/", authentication, updateProfile);

module.exports = userRouter;
