import Book from "../model/book.model.js";
// Function to create a new book
export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: error.message });
  }
};
