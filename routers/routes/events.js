const express = require("express");
const {
  getAllEvents,
  createNewEvent,
  getEventByUserId,
  getEventByCategoryId,
  getEventById,
} = require("../controllers/events");
const { authentication } = require("../middlewares/authentication");

const eventsRouter = express.Router();

eventsRouter.post("/create",authentication, createNewEvent);
eventsRouter.get("/all_events", getAllEvents);
eventsRouter.get("/my_events/:id", getEventByUserId);
eventsRouter.get("/category_events/:id", getEventByCategoryId);
eventsRouter.get("/details/:id", getEventById);

module.exports = eventsRouter;
