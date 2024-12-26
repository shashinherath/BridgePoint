const mongoose = require("mongoose");

const ServiceProviderSchema = new mongoose.Schema(
  {
    companyname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
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
    mobilenumber: {
      type: String,
      required: true,
      match: [/^\+?\d{10,15}$/, "Please enter a valid mobile number"],
    },
    providedservice: {
      type: String,
      required: true,
      enum: ["Food", "Accommodation", "Rides", "Guide"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    user_type: {
      type: String,
      default: "serviceprovider",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ServiceProvider", ServiceProviderSchema);
