import User from "../models/schemas/User.js";

//get all
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    // res.status(500).json({ message: "error", error: err.message });
    next(err);
  }
};

//get one
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      // return res.status(404).json({ message: "User not found" });
      const err = new Error("User not found");
      err.status = 404;
      next(err);
    }
    res.status(200).json(user);
  } catch (err) {
    // res.status(500).json({ message: "error", error: err.message });
    next(err);
  }
};

//insert
export const createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    // res.status(400).json({ message: err.message });
    err.status = 400;
    next(err);
  }
};

//update
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return updated document
      runValidators: true, // run schema validations
    });

    if (!updatedUser) {
      // return res.status(404).json({ message: "user not found" });
      const err = new Error('User not found');
      err.status = 404;
      next(err);
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    // res.status(400).json({ message: err.message });
    err.status = 400;
    next(err);
  }
};

//delete
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    // res.status(500).json({ message: err.message });
    next(err);
  }
};
