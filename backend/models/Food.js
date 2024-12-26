const FoodSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LocalServiceProvider",
    required: true,
  },
  description: { type: String, required: true },
  portionSize: { type: String },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Food", FoodSchema);
