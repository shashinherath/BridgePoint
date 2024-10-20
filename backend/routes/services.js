const express = require("express");
const {
  createService,
  getAllServices,
  updateService,
  deleteService,
} = require("../controllers/serviceController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// @route   POST /api/services
// @desc    Create a new service
// @access  Private
router.post("/", authMiddleware, createService);

// @route   GET /api/services
// @desc    Get all services
// @access  Public
router.get("/", getAllServices);

// @route   PUT /api/services/:id
// @desc    Update a service
// @access  Private
router.put("/:id", authMiddleware, updateService);

// @route   DELETE /api/services/:id
// @desc    Delete a service
// @access  Private
router.delete("/:id", authMiddleware, deleteService);

module.exports = router;
