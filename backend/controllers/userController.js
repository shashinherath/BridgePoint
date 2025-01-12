const Student = require("../models/Student");
const ServiceProvider = require("../models/ServiceProvider");

//get user details
const getUser = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);
    const serviceProvider = await ServiceProvider.findById(req.user.id);
    if (student) {
      res.status(200).json({ user: student });
    } else if (serviceProvider) {
      res.status(200).json({ user: serviceProvider });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error getting user", error });
  }
};

//update user details
const updateUser = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);
    const serviceProvider = await ServiceProvider.findById(req.user.id);
    if (student) {
      const updatedStudent = await Student.findByIdAndUpdate(
        req.user.id,
        req.body,
        { new: true }
      );
      res.status(200).json({ user: updatedStudent });
    } else if (serviceProvider) {
      const updatedServiceProvider = await ServiceProvider.findByIdAndUpdate(
        req.user.id,
        req.body,
        { new: true }
      );
      res.status(200).json({ user: updatedServiceProvider });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

module.exports = {
  getUser,
  updateUser,
};
