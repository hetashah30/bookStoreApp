import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook); // Route to get all books - this will call the getBook function from the book.controller.js file i.e. this is an API

export default router; // Exporting the router to use in the index.js file
