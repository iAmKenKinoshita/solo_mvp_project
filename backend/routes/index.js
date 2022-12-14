const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

//Get requests
router.get("/", indexController.getRecipes);
router.get("/getRecipeDetails/:id", indexController.getRecipeDetails);

module.exports = router;
