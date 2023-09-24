// routes.js
const express = require("express");
const routes = express.Router();

// const upload = require("../middleware/multer");

const {
  getThumbnail,
  addThumbnail,
  getAllThumbnails,
} = require("../controller/thumbnailController");

routes.post("/", addThumbnail);

routes.get("/", getAllThumbnails);

routes.get("/:id", getThumbnail);

module.exports = routes;
