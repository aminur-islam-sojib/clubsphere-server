import User from "../models/user.model.js";

/**
 * Create a new user
 */
export const createUser = async (req, res) => {
  const { name, email, password, role, photoURL } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: "User already exists" });

  // Create user
  const user = await User.create({ name, email, password, role, photoURL });
  res.status(201).json({ message: "User created successfully", user });
};

/**
 * Get all users
 */
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

/**
 * Get single user by ID
 */
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
};

/**
 * Update user role or info
 */
export const updateUser = async (req, res) => {
  const { name, role, photoURL } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { name, role, photoURL, updatedAt: Date.now() },
    { new: true }
  );
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ message: "User updated", user });
};

/**
 * Delete a user
 */
export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ message: "User deleted" });
};
