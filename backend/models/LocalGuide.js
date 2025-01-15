const mongoose = require("mongoose");

const LocalGuideSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  guideType: { type: String, required: true },
  price: { type: Number, required: true },
  item_type: {
    type: String,
    default: "guide",
  },
});

module.exports = mongoose.model("LocalGuide", LocalGuideSchema);
