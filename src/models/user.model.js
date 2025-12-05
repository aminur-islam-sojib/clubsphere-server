import mongoose from "mongoose";

/**
 * User Schema
 *
 * This defines what a "User" document looks like in MongoDB.
 * Users can have different roles:
 * - admin: full access
 * - clubManager: manages their club(s)
 * - member: regular user who can join clubs
 */

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["admin", "clubManager", "member"],
      default: "member",
    },
    photoURL: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Export the User model
const User = mongoose.model("User", userSchema);
export default User;
