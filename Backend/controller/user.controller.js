import User from "../model/user.model.js"; // Importing the User model

import bcryptjs from "bcryptjs"; // Importing bcrypt for password hashing so that passwords are stored securely in the database (MongoDB)

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body; // Destructuring the request body to get user details
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create a new user
    const newUser = new User({
      fullname,
      email,
      password: await bcryptjs.hash(password, 10), // Hashing the password before saving it to the database
    });
    // Save the user to the database
    await newUser.save();
    return res.status(201).json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare passwords only if user exists
    const isMatch = await bcryptjs.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Success
    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: existingUser._id,
        fullname: existingUser.fullname,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
