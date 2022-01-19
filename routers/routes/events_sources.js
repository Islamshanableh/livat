const express = require("express");
const {
    getAllEvents_sources,
    getEventsSourcesByUserId
} = require("../controllers/events_sources");

const events_sourcesRouter = express.Router();


events_sourcesRouter.get("/", getAllEvents_sources);
events_sourcesRouter.get("/:id", getEventsSourcesByUserId);


module.exports = events_sourcesRouter;