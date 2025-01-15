const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  portionSize: { type: String, required: true },
  price: { type: Number, required: true },
  item_type: {
    type: String,
    default: "food",
  },
});

module.exports = mongoose.model("Food", FoodSchema);
