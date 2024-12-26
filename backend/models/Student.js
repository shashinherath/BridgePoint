const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    mobilenumber: {
      type: String,
      required: true,
      match: [/^\+?\d{10,15}$/, "Please enter a valid mobile number"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    user_type: {
      type: String,
      default: "student",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
