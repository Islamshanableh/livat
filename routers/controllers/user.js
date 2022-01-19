const userSchema = require("../../db/models/user");

const updateProfile = async (req, res) => {
  const _id = req.token.userId;
  userSchema
    .findByIdAndUpdate({ _id }, req.body, { new: true })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `user update sucsess`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};

module.exports = {
  updateProfile,
};
