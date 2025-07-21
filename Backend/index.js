import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const MongoURI = process.env.MONGO_URI;

// ✅ Allow requests only from Netlify frontend
const allowedOrigins = [
  "https://heta-bookstore.netlify.app", // your deployed frontend
  "http://localhost:5173", // for local development
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(MongoURI)
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));

// ✅ API Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contactform", contactRoute);

// ✅ Optional: Root route
app.get("/", (req, res) => {
  res.send("BookStore Backend is Running!");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
