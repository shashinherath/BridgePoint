const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Rate", RateSchema);
