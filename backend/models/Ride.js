const mongoose = require("mongoose");

const RideSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  seats: { type: String, required: true },
  price: { type: Number, required: true },
  item_type: {
    type: String,
    default: "ride",
  },
});

module.exports = mongoose.model("Ride", RideSchema);
