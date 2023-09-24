const ThumbnailModel = require("../model/thumbnailModel");

// Add An new Thumbnail
const addThumbnail = async (req, res) => {
  try {
    const { title, description, thumbnailUrl, videoUrl } = req.body;

    const newThumbnail = await ThumbnailModel.create({
      title,
      description,
      thumbnailUrl,
      videoUrl,
    });
    if (newThumbnail) {
      return res.status(201).json(newThumbnail);
    }
  } catch (error) {
    console.error(error, "error");
    res.status(500).json({ error: "An error occurred" });
  }
};

// Get All the Thumbnails
const getAllThumbnails = async (req, res) => {
  try {
    const Allthumbnails = await ThumbnailModel.find({});
    if (Allthumbnails) {
      return res.status(200).json(Allthumbnails);
    } else {
      return res.status(404).json({ error: "Not found the thumbnails " });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occured" });
  }
};

// Get Single Thumbnail
const getThumbnail = async (req, res) => {
  try {
    const thumbnail = await ThumbnailModel.findById(req.params.id);
    if (!thumbnail) {
      res.status(404).json({ error: "Thumbnail not found with the given id " });
    } else {
      res.status(200).json(thumbnail);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  addThumbnail,
  getThumbnail,
  getAllThumbnails,
};
