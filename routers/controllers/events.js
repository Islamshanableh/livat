const eventsSchema = require("../../db/models/events");

const createNewEvent = (req, res) => {
  const userId = req.token.userId;
  const data = req.body;
  data.user_id = userId;
  const newEvent = new eventsSchema(data);
  newEvent
    .save()
    .then((result) => {
      res.status(200);
      res.json({
        success: true,
        message: "Success new event Added",
        categorie: result,
      });
      return;
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "server error" });
      return;
    });
};

const getAllEvents = (req, res) => {
  eventsSchema
    .find({})
    .then((events) => {
      res.status(200).json({
        success: true,
        message: `All events`,
        events: events,
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

const getEventByUserId = (req, res) => {
  const user_id = req.params.id;

  eventsSchema
    .find({ user_id: Number(user_id) })
    .then((events) => {
      res.status(200).json({
        success: true,
        message: `All events for userId=>${user_id}`,
        events: events,
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

const getEventByCategoryId = (req, res) => {
  const category_id = req.params.id;

  eventsSchema
    .find({ categories_id: Number(category_id) })
    .then((events) => {
      res.status(200).json({
        success: true,
        message: `All events for category_id=>${category_id}`,
        events: events,
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

const getEventById = (req, res) => {
  const _id = req.params.id;

  eventsSchema
    .findById({ _id })
    .then((events) => {
      res.status(200).json({
        success: true,
        message: `event for id=>${_id}`,
        events: events,
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
  getAllEvents,
  createNewEvent,
  getEventByUserId,
  getEventByCategoryId,
  getEventById,
};
