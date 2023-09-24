const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./route/thumbnailroute");
const cors = require("cors"); // Import the cors middleware

// initialize the express app
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Enable CORS for all routes
app.use(cors());

app.use("/api/thumbnails", routes);

// connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(
        "App is connected to MongoDB and listening on port number",
        port
      );
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });
