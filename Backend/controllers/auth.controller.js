import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ success: false, error: "Please fill in all fields" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, error: "Passwords do not match" });
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
