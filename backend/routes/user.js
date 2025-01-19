const express = require("express");
const {
  getUser,
  updateUser,
  getProviderById,
  deleteUser,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

// @route   GET /api/user/getuser
// @desc    Get user details
// @access  Private
router.get("/getuser", authMiddleware, getUser);

// @route   PUT /api/user/updateuser
// @desc    Update user details
// @access  Private
router.put(
  "/updateuser",
  authMiddleware,
  upload.single("profileImage"),
  updateUser
);

// @route   GET /api/user/getprovider/:id
// @desc    Get provider details by ID
// @access  Public
router.get("/getprovider/:id", authMiddleware, getProviderById);

// @route   DELETE /api/user/deleteuser
// @desc    Delete user
// @access  Private
router.delete("/deleteuser", authMiddleware, deleteUser);

module.exports = router;
