const User = require("../models/User");

// function for delete an user
const deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

module.exports = {
  deleteUser,
};
