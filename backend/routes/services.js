const express = require("express");
const {
  addItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} = require("../controllers/serviceController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

// @route   POST /api/services
// @desc    Add a service item
// @access  Private
router.post("/additem", authMiddleware, upload.single("image"), addItem);

// @route   DELETE /api/services/deleteitem/:id
// @desc    Delete a service item
// @access  Private
router.delete("/deleteitem/:id", authMiddleware, deleteItem);

// @route   GET /api/services/getitem/:id
// @desc    Get a service item by ID
// @access  Private
router.get("/getitem/:id", authMiddleware, getItemById);

// @route   GET /api/services/getitems
// @desc    Get all service items
// @access  Private
router.get("/getitems", authMiddleware, getItems);

// @route   PUT /api/services/updateitem/:id
// @desc    Update a service item
// @access  Private
router.put(
  "/updateitem/:id",
  authMiddleware,
  upload.single("image"),
  updateItem
);

module.exports = router;
