import e from "express";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.status(201).json({
      message: "User created successfully!",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
