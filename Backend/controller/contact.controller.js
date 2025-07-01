import Contact from "../model/contact.model.js";

// Function to handle contact form submission
export const contact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    // Create a new contact entry
    const newContact = new Contact({
      fullname,
      email,
      message,
    });

    // Save the contact entry to the database
    await newContact.save();

    return res.status(201).json({
      message: "Message sent successfully",
      contact: {
        _id: newContact._id,
        fullname: newContact.fullname,
        email: newContact.email,
        message: newContact.message,
      },
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
