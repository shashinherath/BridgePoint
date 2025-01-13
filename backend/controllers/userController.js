const fs = require("fs");
const path = require("path");
const Student = require("../models/Student");
const ServiceProvider = require("../models/ServiceProvider");

//get user details
const getUser = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);
    const serviceProvider = await ServiceProvider.findById(req.user.id);
    if (student) {
      const profileImageUrl = student.profileImage
        ? `/uploads/${student.profileImage}`
        : null;
      res.status(200).json({ ...student._doc, profileImageUrl });
    } else if (serviceProvider) {
      const profileImageUrl = serviceProvider.profileImage
        ? `/uploads/${serviceProvider.profileImage}`
        : null;
      res.status(200).json({ ...serviceProvider._doc, profileImageUrl });
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
    const {
      firstname,
      lastname,
      companyname,
      address,
      city,
      state,
      email,
      mobilenumber,
      providedservice,
      password,
    } = req.body;
    const profileImage = req.file ? req.file.filename : undefined;

    let existingUser;
    let updatedUser;
    if (student) {
      existingUser = student;
      const updateData = {
        ...(firstname && { firstname }),
        ...(lastname && { lastname }),
        ...(mobilenumber && { mobilenumber }),
        ...(email && { email }),
        ...(password && { password }),
        ...(profileImage && { profileImage }),
      };
      updatedUser = await Student.findByIdAndUpdate(req.user.id, updateData, {
        new: true,
      });
    } else if (serviceProvider) {
      existingUser = serviceProvider;
      const updateData = {
        ...(companyname && { companyname }),
        ...(address && { address }),
        ...(city && { city }),
        ...(state && { state }),
        ...(email && { email }),
        ...(mobilenumber && { mobilenumber }),
        ...(providedservice && { providedservice }),
        ...(password && { password }),
        ...(profileImage && { profileImage }),
      };
      updatedUser = await ServiceProvider.findByIdAndUpdate(
        req.user.id,
        updateData,
        { new: true }
      );
    } else {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete old profileImage if new one is uploaded and it's not the default profile image
    if (
      profileImage &&
      existingUser.profileImage &&
      existingUser.profileImage !== profileImage &&
      existingUser.profileImage !== "default-profile.png"
    ) {
      const oldprofileImagePath = path.join(
        __dirname,
        "../uploads",
        existingUser.profileImage
      );
      fs.unlink(oldprofileImagePath, (err) => {
        if (err) {
          console.error("Error deleting old profileImage file:", err);
        }
      });
    }

    const profileImageUrl = updatedUser.profileImage
      ? `/uploads/${updatedUser.profileImage}`
      : null;
    res.status(200).json({ ...updatedUser._doc, profileImageUrl });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

module.exports = {
  getUser,
  updateUser,
};
