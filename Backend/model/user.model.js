//This file defines the User model for MongoDB using Mongoose.
// It includes fields for fullname, email, and password, with validation rules.
// This will be used in signing up and logging in users with authentication.

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
