const express = require("express");
const {
  registerStudent,
  registerServiceProvider,
  loginUser,
} = require("../controllers/authController");
const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register student
// @access  Public
router.post("/registerstudent", registerStudent);

// @route   POST /api/auth/register
// @desc    Register service provider
// @access  Public
router.post("/registerserviceprovider", registerServiceProvider);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", loginUser);

module.exports = router;
