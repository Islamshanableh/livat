const express = require("express");
const { createNewCategorie,getAllCategories } = require("../controllers/categories");

const categoriesRouter = express.Router();

categoriesRouter.post("/create_new", createNewCategorie);
categoriesRouter.get("/", getAllCategories);

module.exports = categoriesRouter;
