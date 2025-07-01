// const express = require("express");
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"; // Importing mongoose to connect to MongoDB
import cors from "cors"; // Importing cors to handle Cross-Origin Resource Sharing

import bookRoute from "./route/book.route.js"; // Importing the book route from the book.route.js file
import userRoute from "./route/user.route.js"; // Importing the user route from the user.route.js file
import contactRoute from "./route/contact.route.js"; // Importing the contact route from the contact.route.js file

const app = express();

app.use(cors()); // Middleware to enable CORS
app.use(express.json()); // Middleware to parse JSON request bodies

dotenv.config(); // Load environment variables from .env file

// const port = 3000; // Use the port from the environment variable since it is sensitive information or default to 4000
const PORT = process.env.PORT || 4000;
const MongoURI = process.env.MongoDB_URI;

// app.get("/", (req, res) => {
//   res.send("BookStore App!");
// });

//Connecting to MongoDB Compass using Mongoose (after installing mongoose package with npm install mongoose)
try {
  // mongoose.connect(MongoURI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  mongoose.connect(MongoURI);
  console.log("Connected to MongoDB");
} catch (error) {
  //These useNewUrlParser and useUnifiedTopology options are used to avoid deprecation warnings in Mongoose. -  Not required for MongoDB on Atlas (Cloud) only use them if you are using MongoDB Compass (Local).
  console.error("Error connecting to MongoDB:", error);
}

//Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contactform", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
