const fs = require("fs");
const path = require("path");
const Student = require("../models/Student");
const ServiceProvider = require("../models/ServiceProvider");
const bcrypt = require("bcrypt");
const Rate = require("../models/Rate");
const Accommodation = require("../models/Accommodation");
const Food = require("../models/Food");
const Guide = require("../models/LocalGuide");
const Ride = require("../models/Ride");

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
    const hashedPassword = await bcrypt.hash(password, 10);

    let existingUser;
    let updatedUser;
    if (student) {
      existingUser = student;
      const updateData = {
        ...(firstname && { firstname }),
        ...(lastname && { lastname }),
        ...(mobilenumber && { mobilenumber }),
        ...(email && { email }),
        ...(password && { password: hashedPassword }),
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
        ...(password && { password: hashedPassword }),
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

//Get provider by id
const getProviderById = async (req, res) => {
  try {
    const provider = await ServiceProvider.findById(req.params.id);
    if (provider) {
      const profileImageUrl = provider.profileImage
        ? `/uploads/${provider.profileImage}`
        : null;
      res.status(200).json({ ...provider._doc, profileImageUrl });
    } else {
      res.status(404).json({ message: "Provider not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error getting provider", error });
  }
};

//Delete User
const deleteUser = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);
    const serviceProvider = await ServiceProvider.findById(req.user.id);
    let user;
    let deletedItems = [];
    if (student) {
      user = student;
      await Student.findByIdAndDelete(req.user.id);
      // Delete linked data for student
      await Rate.deleteMany({ studentId: user.id });
    } else if (serviceProvider) {
      user = serviceProvider;
      await ServiceProvider.findByIdAndDelete(req.user.id);
      // Delete linked data for service provider
      deletedItems.push(...(await Accommodation.find({ providerId: user.id })));
      deletedItems.push(...(await Food.find({ providerId: user.id })));
      deletedItems.push(...(await Guide.find({ providerId: user.id })));
      deletedItems.push(...(await Ride.find({ providerId: user.id })));
      await Accommodation.deleteMany({ providerId: user.id });
      await Food.deleteMany({ providerId: user.id });
      await Guide.deleteMany({ providerId: user.id });
      await Ride.deleteMany({ providerId: user.id });
      await Rate.deleteMany({ providerId: user.id });
    } else {
      return res.status(404).json({ message: "User not found" });
    }

    for (const item of deletedItems) {
      if (item.image) {
        const imagePath = path.join(__dirname, "../uploads", item.image);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error("Error deleting image file:", err);
          }
        });
      }
    }

    if (user.profileImage && user.profileImage !== "default-profile.png") {
      const profileImagePath = path.join(
        __dirname,
        "../uploads",
        user.profileImage
      );
      fs.unlink(profileImagePath, (err) => {
        if (err) {
          console.error("Error deleting profileImage file:", err);
        }
      });
    }

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

module.exports = {
  getUser,
  updateUser,
  getProviderById,
  deleteUser,
};
