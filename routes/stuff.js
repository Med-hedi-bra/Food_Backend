const express = require("express");
const route = express.Router();
const stuffControllers = require("../controllers/stuff.js"); 

route.get("/",stuffControllers.get_Recipes);
route.post("/",stuffControllers.createRecipes);

module.exports = route;  