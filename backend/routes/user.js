const express = require("express");
const { getUser, updateUser } = require("../controllers/userController");
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

module.exports = router;
