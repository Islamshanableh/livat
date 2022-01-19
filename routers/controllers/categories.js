const categoriesSchema = require("../../db/models/categories");

const createNewCategorie = (req, res) => {
  const newCategorie = new categoriesSchema(req.body);
  newCategorie
    .save()
    .then((result) => {
      res.status(200);
      res.json({
        success: true,
        message: "Success new Categorie Added",
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

const getAllCategories = (req, res) => {
  categoriesSchema
    .find({})
    .then((categories) => {
      res.status(200).json({
        success: true,
        message: `All categories`,
        categories: categories,
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
  createNewCategorie,
  getAllCategories,
};
