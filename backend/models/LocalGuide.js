const LocalGuideSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LocalServiceProvider",
    required: true,
  },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availabilityStatus: { type: Boolean, default: true },
});

module.exports = mongoose.model("LocalGuide", LocalGuideSchema);
