const events_sourcesSchema = require("../../db/models/events_sources");

const getAllEvents_sources = (req, res) => {
  events_sourcesSchema
    .find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All Events Sources `,
        events_sources: result,
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

const getEventsSourcesByUserId = (req, res) => {
  const user_id = req.params.id;
  events_sourcesSchema
    .find({ user_id: Number(user_id) })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All Events Sources for userId=>${user_id}`,
        events_sources: result,
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
  getAllEvents_sources,
  getEventsSourcesByUserId
};
