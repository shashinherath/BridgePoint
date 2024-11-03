const express = require("express");
const { deleteUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// @route   DELETE /api/user/delete
// @desc    Delete an user
// @access  Private
router.delete("/delete", authMiddleware, deleteUser);

module.exports = router;
